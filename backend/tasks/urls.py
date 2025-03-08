from django.urls import path,include
from rest_framework.routers import SimpleRouter
from .views import ProjectViewSet,TaskViewSet,CommentViewSet

router = SimpleRouter()

router.register(r'projects',ProjectViewSet)
router.register(r'tasks',TaskViewSet)
router.register(r'comments',CommentViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
