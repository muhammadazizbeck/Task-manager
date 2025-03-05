from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from users.serializers import CustomTokenObtainPairSerializer,CustomUserSerializer,ChangePasswordSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework import permissions,status
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
User = get_user_model()

# Create your views here.
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny,]

    def create(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            context = {
                'status':'success',
                'message':'Foydalanuvchi muvaffaqiyatli yaratildi',
                'refresh':str(refresh),
                'access':str(refresh.access_token)
            }
            return Response(context,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self,request):
        try:
            refresh_token = request.data['refresh']
            token = RefreshToken(refresh_token)
            token.blacklist()
            context = {
                'status':'success',
                'message':'Tizimdan muvaffaqiyatli chiqildi'
            }
            return Response(context,status=status.HTTP_200_OK)
        except Exception:
            context = {
                'error':str(Exception)
            }
            return Response(context,status=status.HTTP_400_BAD_REQUEST)
        

        


    

     