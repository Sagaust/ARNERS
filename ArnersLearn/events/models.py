from django.db import models

class Event(models.Model):
    EVENT_TYPE_CHOICES = [
        ('Webinar', 'Webinar'),
        ('Workshop', 'Workshop'),
        ('Conference', 'Conference'),
        ('Meetup', 'Meetup'),
    ]

    EVENT_STATUS_CHOICES = [
        ('Upcoming', 'Upcoming'),
        ('Ongoing', 'Ongoing'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    event_id = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=255)
    event_type = models.CharField(max_length=50, choices=EVENT_TYPE_CHOICES, default='Webinar')
    event_status = models.CharField(max_length=50, choices=EVENT_STATUS_CHOICES, default='Upcoming')
    event_date = models.DateTimeField()
    event_end_date = models.DateTimeField(null=True, blank=True)
    event_description = models.TextField()
    event_location = models.CharField(max_length=255, blank=True, null=True)
    event_url = models.URLField(blank=True, null=True)
    registration_deadline = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.event_name
