from django.urls import path,include
from .views import TaskListCreateApiView,TaskUpdateRetrieveDestroyApiView


urlpatterns = [
    path('lcview/',TaskListCreateApiView.as_view(),name='task-list-create'),
    path('rudview/',TaskUpdateRetrieveDestroyApiView.as_view(),name='task-retrieve-update-destroy')
]
