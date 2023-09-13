from django.db import models

class Course(models.Model):
    COURSE_LEVEL_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]
    
    COURSE_STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
        ('Upcoming', 'Upcoming'),
    ]

    course_id = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=255)
    course_description = models.TextField()
    course_level = models.CharField(max_length=20, choices=COURSE_LEVEL_CHOICES, default='Beginner')
    course_status = models.CharField(max_length=20, choices=COURSE_STATUS_CHOICES, default='Active')
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.course_name

class Module(models.Model):
    MODULE_TYPE_CHOICES = [
        ('Video', 'Video'),
        ('Quiz', 'Quiz'),
        ('Assignment', 'Assignment'),
        ('Reading', 'Reading'),
    ]

    module_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, related_name='modules', on_delete=models.CASCADE)
    module_name = models.CharField(max_length=255)
    module_type = models.CharField(max_length=20, choices=MODULE_TYPE_CHOICES, default='Video')
    module_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.module_name
