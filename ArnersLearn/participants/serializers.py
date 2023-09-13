from rest_framework import serializers
from .models import Participant  # Import your Participant model

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant 
        fields = '__all__'
