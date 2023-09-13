from django import forms
from .models import Masterclass

class MasterclassForm(forms.ModelForm):
    class Meta:
        model = Masterclass
        fields = '__all__'
