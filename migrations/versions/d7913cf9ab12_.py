"""empty message

<<<<<<<< HEAD:migrations/versions/ecc1a2a48b85_.py
Revision ID: ecc1a2a48b85
Revises: 
Create Date: 2023-02-13 13:14:46.996579
========
Revision ID: d7913cf9ab12
Revises: 
Create Date: 2023-02-13 12:54:58.133789
>>>>>>>> f6911f4edb04a5f7a466186f7c9b482e78bea096:migrations/versions/d7913cf9ab12_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/ecc1a2a48b85_.py
revision = 'ecc1a2a48b85'
========
revision = 'd7913cf9ab12'
>>>>>>>> f6911f4edb04a5f7a466186f7c9b482e78bea096:migrations/versions/d7913cf9ab12_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('contraseña', sa.String(length=80), nullable=False),
    sa.Column('celular', sa.String(length=15), nullable=True),
    sa.Column('direccion', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('mascota',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo', sa.String(length=120), nullable=False),
    sa.Column('estado', sa.String(length=120), nullable=False),
    sa.Column('categoria', sa.String(length=80), nullable=True),
    sa.Column('nombre', sa.String(length=80), nullable=True),
    sa.Column('edad', sa.String(length=80), nullable=True),
    sa.Column('tamaño', sa.String(length=80), nullable=True),
    sa.Column('genero', sa.String(length=80), nullable=True),
    sa.Column('raza', sa.String(length=80), nullable=True),
    sa.Column('descripcion', sa.String(length=250), nullable=False),
    sa.Column('contacto', sa.String(length=80), nullable=False),
    sa.Column('ubicacion', sa.String(length=80), nullable=False),
    sa.Column('fecha', sa.String(length=80), nullable=False),
    sa.Column('foto1', sa.String(length=250), nullable=False),
    sa.Column('foto2', sa.String(length=80), nullable=True),
    sa.Column('foto3', sa.String(length=80), nullable=True),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['usuario_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mascota')
    op.drop_table('usuario')
    # ### end Alembic commands ###
