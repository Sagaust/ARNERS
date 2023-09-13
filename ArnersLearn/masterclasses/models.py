from django.db import models

class Masterclass(models.Model):
    MASTERCLASS_TYPE_CHOICES = [
        ('Webinar', 'Webinar'),
        ('Workshop', 'Workshop'),
        ('Seminar', 'Seminar'),
    ]

    MASTERCLASS_STATUS_CHOICES = [
        ('Upcoming', 'Upcoming'),
        ('Ongoing', 'Ongoing'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    masterclass_id = models.AutoField(primary_key=True)
    masterclass_name = models.CharField(max_length=255)
    masterclass_type = models.CharField(max_length=50, choices=MASTERCLASS_TYPE_CHOICES, default='Webinar')
    masterclass_status = models.CharField(max_length=50, choices=MASTERCLASS_STATUS_CHOICES, default='Upcoming')
    masterclass_date = models.DateTimeField()
    masterclass_end_date = models.DateTimeField(null=True, blank=True)
    masterclass_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.masterclass_name
