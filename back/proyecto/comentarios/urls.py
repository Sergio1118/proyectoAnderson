from django.urls import path
from .views import ComentarioView

urlpatterns = [
    path('posts/<int:post_id>/comentarios/', ComentarioView.as_view(), name='comentarios'),  
]
