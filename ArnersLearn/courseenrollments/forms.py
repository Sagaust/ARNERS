from django import forms
from .models import CourseEnrollment

class CourseEnrollmentForm(forms.ModelForm):
    class Meta:
        model = CourseEnrollment
        fields = '__all__'
