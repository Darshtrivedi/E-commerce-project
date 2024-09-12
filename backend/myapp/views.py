# myapp/views.py

from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required

@api_view(['GET'])
def check_login_status(request):
    if request.user.is_authenticated:
        return Response({'isLoggedIn': True, 'username': request.user.username})
    return Response({'isLoggedIn': False})




class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": RegisterSerializer(user, context=self.get_serializer_context()).data,
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            # "user": RegisterSerializer(user, context=self.get_serializer_context()).data,
            "user": {
                "id": user.id,  # You can also return other user fields like 'id', 'email'
                "username": user.username,  # Explicitly returning the username here
                "email": user.email,
            },
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        })
    
    def get(self, request):
        if request.user.is_authenticated:
            return Response({'isLoggedIn': True, 'username': request.user.username})
        return Response({'isLoggedIn': False})

