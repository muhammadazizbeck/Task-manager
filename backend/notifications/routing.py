from django.urls import re_path
from .consumers import NotificationCunsumer

websocket_urlpatterns = [
    re_path("ws/notifications/",NotificationCunsumer.as_asgi()),
]