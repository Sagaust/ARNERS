from django.db import models
from courses.models import Course
from participants.models import Participant

class CourseEnrollment(models.Model):
    ENROLLMENT_STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Completed', 'Completed'),
        ('Dropped', 'Dropped'),
    ]

    enrollment_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='enrollments', on_delete=models.CASCADE)
    participant = models.ForeignKey(Participant, related_name='enrollments', on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=ENROLLMENT_STATUS_CHOICES, default='Active')
    enrollment_date = models.DateField()
    completion_date = models.DateField(null=True, blank=True)
    grade = models.CharField(max_length=5, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.course.course_name} - {self.participant.full_name}"
