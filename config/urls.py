from django.contrib import admin
from django.urls import path,include
from rest_framework import permissions
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(
        title='Task Manager',
        description='Automation schema for workplaces',
        default_version='v1',
        terms_of_service='Demo Terms',
        contact=openapi.Contact(email='aa2004bek@gmail.com'),
        license=openapi.License(name='Task Manager License')
    ),
    public=True,
    permission_classes=[permissions.AllowAny,]
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('redoc/',schema_view.with_ui('redoc',cache_timeout=0),name='schema-redoc'),
    path('swagger/',schema_view.with_ui('swagger',cache_timeout=0),name='schema-swagger'),
    path('api/auth/',include('users.urls')),
]
