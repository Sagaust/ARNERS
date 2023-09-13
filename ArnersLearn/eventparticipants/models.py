from django.db import models
from events.models import Event
from participants.models import Participant

class EventParticipant(models.Model):
    PARTICIPATION_STATUS_CHOICES = [
        ('Attending', 'Attending'),
        ('Cancelled', 'Cancelled'),
        ('Completed', 'Completed'),
    ]

    event_participant_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, related_name='participants', on_delete=models.CASCADE)
    participant = models.ForeignKey(Participant, related_name='events', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=PARTICIPATION_STATUS_CHOICES, default='Attending')
    registration_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.event.event_name} - {self.participant.full_name}"
