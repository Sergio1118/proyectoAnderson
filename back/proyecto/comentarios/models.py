from django.db import models
from blog.models import Post  # Importa el modelo Post

class Comentario(models.Model):
    post = models.ForeignKey(Post, related_name="comentarios", on_delete=models.CASCADE)  # Relación con Post
    contenido = models.TextField()  # El campo contenido debe existir
    autor = models.CharField(max_length=100)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comentario de {self.autor} en {self.post.title}"
