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