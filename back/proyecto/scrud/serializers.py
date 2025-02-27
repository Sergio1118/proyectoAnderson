from rest_framework import serializers
from .models import Publicacion

class PublicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publicacion
        fields = ['id', 'titulo', 'contenido', 'fecha_publicacion', 'autor']
        read_only_fields = ['fecha_publicacion', 'autor']  # Estos campos no se pueden modificar