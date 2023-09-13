from django.db import models

class Admin(models.Model):
    ROLE_CHOICES = [
        ('Super Admin', 'Super Admin'),
        ('Course Admin', 'Course Admin'),
        ('Event Admin', 'Event Admin'),
    ]

    admin_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='Super Admin')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name
