from django.db import models
from courses.models import Course

class Announcement(models.Model):
    announcement_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='announcements', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    publish_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
