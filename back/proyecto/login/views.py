from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User 


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user_data = serializer.validated_data
            # Crear el token JWT
            user = User.objects.get(id=user_data['id'])
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token
            return Response({
                'refresh_token': str(refresh),
                'access_token': str(access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
