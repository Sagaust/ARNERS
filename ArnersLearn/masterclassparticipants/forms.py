from django import forms
from .models import MasterclassParticipant

class MasterclassParticipantForm(forms.ModelForm):
    class Meta:
        model = MasterclassParticipant
        fields = '__all__'
