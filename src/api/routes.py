"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, Usuario, Mascota
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_cors import CORS
from flask_mail import Message
import random
import string
api = Blueprint('api', __name__)


@api.route('/registro', methods=['POST'])
def registrar_usuario():
    request_body = json.loads(request.data)
    nuevo_usuario = Usuario(email =  request_body['email'], nombre = request_body['nombre'], contraseña = request_body['contraseña'], celular = request_body['celular'], direccion = request_body['direccion'])
    usuario = Usuario.query.filter_by(email=request_body['email']).first()
    if usuario is None:
        db.session.add(nuevo_usuario)
        db.session.commit()
        todos_los_usuarios = Usuario.query.all()
        resultados = list(map(lambda item: item.serialize(),todos_los_usuarios))
        return jsonify(resultados), 201
    
    return jsonify("User already exists"), 400

@api.route("/autenticacion", methods=["POST"])
def inicio_de_sesion():
    email = request.json.get("email", None)
    contraseña = request.json.get("contraseña", None)
    usuario = Usuario.query.filter_by(email=email).first()
    if usuario is None:
        return jsonify({"msg": "El usuario no existe"}), 404   
    if contraseña != usuario.contraseña:
        return jsonify({"msg": "Usuario o contraseña incorrectos"}), 404

    access_token = create_access_token(identity=email)
    return jsonify({"access_token": access_token,"user_id":usuario.id, "msg":"Usuario logeado"}), 200

@api.route('/publicacion/<int:user_id>', methods=['POST'])
def publicar(user_id):
    request_body = json.loads(request.data)
    nueva_publicacion = Mascota(titulo =  request_body['titulo'], estado = request_body['estado'], categoria = request_body['categoria'], nombre = request_body['nombre'], edad = request_body['edad'], tamaño =  request_body['tamaño'], genero = request_body['genero'], raza = request_body['raza'], descripcion = request_body['descripcion'], contacto = request_body['contacto'], ubicacion =  request_body['ubicacion'], localizacion = request_body['localizacion'], foto1 = request_body['foto1'], foto2 = request_body['foto2'], foto3 = request_body['foto3'], usuario_id = user_id)
    db.session.add(nueva_publicacion)
    db.session.commit()
    todos_las_mascota = Mascota.query.all()
    resultados = list(map(lambda item: item.serialize(),todos_las_mascota))
    return jsonify(resultados), 201

@api.route('/mascotas', methods=['GET'])
def traer_mascotas():
    mascotas= Mascota.query.all()
    results = list(map(lambda item: item.serialize(), mascotas))
    return jsonify(results), 200

#RECUPERACION CONTRASEÑA OLVIDADA 
@api.route("/recuperar-contraseña", methods=["POST"])
def recuperarContraseña():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#busco si el correo existe en mi base de datos
    usuario = Usuario.query.filter_by(email=recover_email).first()
    if usuario is None:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    usuario.contraseña= recover_password
    db.session.commit()
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hola", recipients=[recover_email])
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200

    #CAMBIAR CONTRASEÑA
@api.route("/cambiar-contrasena/<int:user_id>", methods=["POST"])
def cambiarContrasena(user_id):
        recover_nuevacontrasena = request.json['nuevacontrasena']
        recover_contrasena = request.json['viejacontrasena']
        usuario = Usuario.query.filter_by(id=user_id).first()
        print(usuario)
        print(recover_nuevacontrasena)
        print(recover_contrasena)
        if usuario.contraseña == recover_contrasena: 
            usuario.contraseña= recover_nuevacontrasena
            db.session.commit()
            return jsonify({"msg": "Contraseña cambiada correctamente"}), 201
        return jsonify({"msg": "Contraseña incorrecta"}), 400
        # return jsonify({"msg": "ok"}), 200

    #FILTRAR MASCOTAS POR ID
@api.route("/mascotas/<int:mascota_id>", methods=["GET"])
def get_mascota_info(mascota_id):
    mascota= Mascota.query.filter_by(id=mascota_id).first()
    return jsonify(mascota.serialize()),200