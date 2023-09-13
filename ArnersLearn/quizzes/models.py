from django.db import models
from courses.models import Course

class Quiz(models.Model):
    QUIZ_STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Published', 'Published'),
        ('Archived', 'Archived'),
    ]

    quiz_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='quizzes', on_delete=models.CASCADE)
    quiz_title = models.CharField(max_length=255)
    quiz_description = models.TextField()
    status = models.CharField(max_length=20, choices=QUIZ_STATUS_CHOICES, default='Draft')
    time_limit = models.PositiveIntegerField(help_text='Time limit in minutes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.quiz_title
