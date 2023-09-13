from django.db import models
from masterclasses.models import Masterclass
from participants.models import Participant

class MasterclassParticipant(models.Model):
    PARTICIPATION_STATUS_CHOICES = [
        ('Registered', 'Registered'),
        ('Attended', 'Attended'),
        ('Cancelled', 'Cancelled'),
        ('Completed', 'Completed'),
    ]

    masterclass_participant_id = models.AutoField(primary_key=True)
    masterclass = models.ForeignKey(Masterclass, related_name='participants', on_delete=models.CASCADE)
    participant = models.ForeignKey(Participant, related_name='masterclasses', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=PARTICIPATION_STATUS_CHOICES, default='Registered')
    registration_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.masterclass.masterclass_name} - {self.participant.full_name}"
