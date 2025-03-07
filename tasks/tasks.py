from celery import shared_task

@shared_task
def send_notification(user_id,message):
    print(f"User {user_id} ga xabar yuborildi {message}")
    