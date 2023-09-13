from rest_framework import serializers
from .models import Instructor  # Replace with your model

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'
