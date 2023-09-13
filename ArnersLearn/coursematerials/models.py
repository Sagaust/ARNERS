from django.db import models
from courses.models import Course

class CourseMaterial(models.Model):
    MATERIAL_TYPE_CHOICES = [
        ('PDF', 'PDF'),
        ('Video', 'Video'),
        ('Quiz', 'Quiz'),
    ]

    material_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='materials', on_delete=models.CASCADE)
    material_type = models.CharField(max_length=20, choices=MATERIAL_TYPE_CHOICES, default='PDF')
    material_title = models.CharField(max_length=255)
    material_file = models.FileField(upload_to='course_materials/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.material_title
