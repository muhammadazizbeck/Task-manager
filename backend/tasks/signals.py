from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import json
from .models import Task


@receiver(post_save,sender=Task)
def task_status_changed(sender,instance,**kwargs):
    channel_layer = get_channel_layer()
    message = f"Task {instance.title} status changed to {instance.status}"

    async_to_sync(channel_layer.group_send)(
        f"user_{instance.assignee.id}",
        {
            'type':"send_notification",
            'message':message
        }
    )