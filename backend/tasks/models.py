from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

class Project(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,related_name='projects')

    def __str__(self):
        return self.name
    
class Task(models.Model):
    STATUS_CHOICES = [
        ('todo','TO-DO'),
        ('in_progress','IN_PROGRESS'),
        ('done','DONE')
    ]
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True,null=True)
    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name='tasks')
    assignee = models.ForeignKey(User,on_delete=models.SET_NULL,blank=True,null=True,related_name='tasks')
    status = models.CharField(max_length=20,choices=STATUS_CHOICES,default='todo')
    due_date = models.DateField(blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    task = models.ForeignKey(Task,on_delete=models.CASCADE,related_name='comments')
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='comments')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.author} on {self.task}'

