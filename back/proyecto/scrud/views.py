from rest_framework import generics, permissions
from .models import Publicacion
from .serializers import PublicacionSerializer
from django.contrib.auth.models import User

# Vista para listar y crear publicaciones
class PublicacionListCreateView(generics.ListCreateAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(autor=self.request.user)  # Asigna el usuario autenticado como autor

# Vista para ver, actualizar y eliminar una publicación
class PublicacionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]