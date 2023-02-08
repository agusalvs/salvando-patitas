"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, Usuario, Mascota
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
        return jsonify({"msg": "Usuario o contraseña incorrecta"}), 404

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

@api.route('/publicacion/<int:user_id>', methods=['POST'])
def publicar(user_id):
    request_body = json.loads(request.data)
    nueva_publicacion = Mascota(titulo =  request_body['titulo'], estado = request_body['estado'], categoria = request_body['categoria'], nombre = request_body['nombre'], edad = request_body['edad'], tamaño =  request_body['tamaño'], genero = request_body['genero'], raza = request_body['raza'], descripcion = request_body['descripcion'], contacto = request_body['contacto'], ubicacion =  request_body['ubicacion'], fecha = request_body['fecha'], foto1 = request_body['foto1'], foto2 = request_body['foto2'], foto3 = request_body['foto3'], usuario_id = user_id)
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