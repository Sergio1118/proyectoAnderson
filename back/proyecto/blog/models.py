from django.db import models
from django.contrib.auth.models import User  # Importamos el modelo User para asociar el post con un autor

class Post(models.Model):
    title = models.CharField(max_length=255)  # El título de la publicación
    content = models.TextField()  # El contenido o cuerpo de la publicación
    created_at = models.DateTimeField(auto_now_add=True)  # La fecha y hora en que se crea la publicación
    updated_at = models.DateTimeField(auto_now=True)  # La fecha y hora en que se actualiza la publicación
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # Relación con el usuario que creó el post

    def __str__(self):
        return self.title  # Esto es lo que se verá cuando se imprima un objeto del modelo Post
