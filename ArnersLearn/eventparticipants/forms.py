from django import forms
from .models import EventParticipant

class EventParticipantForm(forms.ModelForm):
    class Meta:
        model = EventParticipant
        fields = '__all__'
