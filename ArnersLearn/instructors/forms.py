from django import forms
from .models import Instructor

class InstructorForm(forms.ModelForm):
    class Meta:
        model = Instructor
        fields = '__all__'  # Include all fields, or specify the ones you want to include
