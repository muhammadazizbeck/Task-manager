from rest_framework_simplejwt.views import TokenRefreshView
from users.views import CustomTokenObtainPairView,RegisterView,LoginView,LogoutView
from django.urls import path

urlpatterns = [
    path('token/',CustomTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('login/',LoginView.as_view(),name='login'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('register/',RegisterView.as_view(),name='register'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh')

]