from django.db import models

class Manager(models.Model):
    MANAGER_ROLE_CHOICES = [
        ('Course Manager', 'Course Manager'),
        ('Event Manager', 'Event Manager'),
        ('Admin', 'Admin'),
    ]

    manager_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=MANAGER_ROLE_CHOICES, default='Course Manager')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name
