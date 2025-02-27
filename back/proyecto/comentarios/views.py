from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Comentario
from .serializers import ComentarioSerializer
from blog.models import Post  

class ComentarioView(APIView):
    permission_classes = [IsAuthenticated]  

    def get(self, request, post_id):
        try:
            post = Post.objects.get(id=post_id)
            comentarios = post.comentarios.all()  
            serializer = ComentarioSerializer(comentarios, many=True)
            return Response(serializer.data)
        except Post.DoesNotExist:
            return Response({'detail': 'Post not found.'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, post_id):

        try:
            post = Post.objects.get(id=post_id)
            data = request.data
            data['post'] = post.id  
            data['author'] = request.user.id  
            serializer = ComentarioSerializer(data=data)
            
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Post.DoesNotExist:
            return Response({'detail': 'Post not found.'}, status=status.HTTP_404_NOT_FOUND)
