from django import forms
from .models import Participant

class ParticipantForm(forms.ModelForm):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email Address'})
    )
    name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Full Name'})
    )
    phone = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Phone Number'})
    )
    
    # Add any other custom fields here

    class Meta:
        model = Participant
        fields = '__all__'  # Include all fields, or specify fields you want to include

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if "example.com" in email:
            raise forms.ValidationError("Emails from example.com are not allowed.")
        return email

    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if len(phone) < 10:
            raise forms.ValidationError("Enter a valid phone number.")
        return phone
    
    # Add any other custom validation here
