from django.db import models
from courses.models import Course
from participants.models import Participant

class Feedback(models.Model):
    FEEDBACK_STATUS_CHOICES = [
        ('New', 'New'),
        ('Reviewed', 'Reviewed'),
        ('Resolved', 'Resolved'),
    ]

    feedback_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='feedbacks', on_delete=models.CASCADE)
    participant = models.ForeignKey(Participant, related_name='feedbacks', on_delete=models.CASCADE)
    comments = models.TextField()
    status = models.CharField(max_length=20, choices=FEEDBACK_STATUS_CHOICES, default='New')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.course.course_name} - {self.participant.full_name}"
