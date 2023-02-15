from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre =  db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    celular =  db.Column(db.String(15), unique=False)
    direccion = db.Column(db.String(80), unique=False, nullable=False)
    mascota = db.relationship('Mascota', backref='usuario', lazy=True)

    def __repr__(self):
        return f'<Usuario {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "celular": self.celular,
            "direccion": self.direccion
            # do not serialize the password, its a security breach
        }

class Mascota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo =  db.Column(db.String(120), unique=False, nullable=False)
    estado = db.Column(db.String(120), unique=False, nullable=False)
    categoria = db.Column(db.String(80), unique=False)
    nombre =  db.Column(db.String(80), unique=False)
    edad =  db.Column(db.String(80), unique=False)
    tamaño =  db.Column(db.String(80), unique=False)
    genero =  db.Column(db.String(80), unique=False)
    raza =  db.Column(db.String(80), unique=False)
    descripcion =  db.Column(db.String(250), nullable=False)
    contacto =  db.Column(db.String(80), nullable=False)
    ubicacion =  db.Column(db.String(80), nullable=False)
    foto1 =  db.Column(db.String(250), unique=False, nullable=False)
    foto2 =  db.Column(db.String(80), unique=False)
    foto3 =  db.Column(db.String(80), unique=False)
    usuario_id =  db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)

    def __repr__(self):
        return f'<Mascota {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "estado": self.estado,
            "categoria": self.categoria,
            "nombre": self.nombre,
            "edad": self.edad,
            "tamaño": self.tamaño,
            "genero": self.genero,
            "raza": self.raza,
            "descripcion": self.descripcion,
            "contacto": self.contacto,
            "ubicacion": self.ubicacion,
            "foto1": self.foto1,
            "foto2": self.foto2,
            "foto3": self.foto3,
            "usuario_id": self.usuario_id
        }