from django import forms
from .models import Course, Module

class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = '__all__'

class ModuleForm(forms.ModelForm):
    class Meta:
        model = Module
        fields = '__all__'
