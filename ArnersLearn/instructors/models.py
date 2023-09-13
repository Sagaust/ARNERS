from django.db import models
from courses.models import Course
from participants.models import Participant

class Instructor(models.Model):
    INSTRUCTOR_TYPE_CHOICES = [
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-time'),
        ('Guest', 'Guest'),
    ]

    instructor_id = models.AutoField(primary_key=True)
    participant = models.OneToOneField(Participant, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, related_name='instructors')
    instructor_type = models.CharField(max_length=20, choices=INSTRUCTOR_TYPE_CHOICES, default='Full-time')
    bio = models.TextField()
    specializations = models.TextField()
    years_of_experience = models.IntegerField()
    linkedin_profile = models.URLField(blank=True, null=True)
    twitter_profile = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.participant.full_name
