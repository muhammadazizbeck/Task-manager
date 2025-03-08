from django.shortcuts import render
from .models import Project,Task,Comment
from .serializers import ProjectSerializer,TaskSerializer,CommentSerializer
from rest_framework import viewsets,permissions
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView

# Create your views here.

# class ProjectViewSet(viewsets.ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
#     permission_classes = [permissions.IsAuthenticated]
    
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

class TaskListCreateApiView(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

class TaskUpdateRetrieveDestroyApiView(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]
    
# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer
#     permission_classes = [permissions.IsAuthenticated]
    

