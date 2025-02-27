from django.urls import path
from .views import PostListCreateAPIView, PostRetrieveUpdateDestroyAPIView  # Importar las vistas correctamente

urlpatterns = [
    path('posts/', PostListCreateAPIView.as_view(), name='post-list-create'),  # Ruta para listar y crear posts
    path('posts/<int:pk>/', PostRetrieveUpdateDestroyAPIView.as_view(), name='post-detail'),  # Ruta para obtener, actualizar o eliminar un post específico]
]