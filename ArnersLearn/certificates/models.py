from django.db import models
from courses.models import Course
from participants.models import Participant

class Certificate(models.Model):
    CERTIFICATE_STATUS_CHOICES = [
        ('Issued', 'Issued'),
        ('Pending', 'Pending'),
        ('Revoked', 'Revoked'),
    ]

    certificate_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
    issue_date = models.DateField()
    status = models.CharField(max_length=20, choices=CERTIFICATE_STATUS_CHOICES, default='Pending')

    def __str__(self):
        return f"{self.course.course_name} - {self.participant.full_name}"
