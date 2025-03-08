from rest_framework_simplejwt.views import TokenRefreshView
from users.views import CustomTokenObtainPairView,RegisterView,LoginView,LogoutView,ChangePasswordView
from django.urls import path

urlpatterns = [
    path('token/',CustomTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('register/',RegisterView.as_view(),name='register'),
    path('change-password/',ChangePasswordView.as_view(),name='change-password'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh')
]