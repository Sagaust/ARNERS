from django.shortcuts import render, redirect, get_object_or_404
from .models import Certificate
from .forms import CertificateForm  # Assuming you have a form for Certificate

# Display all certificates
def list_certificates(request):
    certificates = Certificate.objects.all()
    return render(request, 'certificates/list.html', {'certificates': certificates})

# Create a new certificate
def create_certificate(request):
    if request.method == 'POST':
        form = CertificateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_certificates')
    else:
        form = CertificateForm()
    return render(request, 'certificates/create.html', {'form': form})

# Edit a certificate
def edit_certificate(request, id):
    certificate = get_object_or_404(Certificate, id=id)
    if request.method == 'POST':
        form = CertificateForm(request.POST, instance=certificate)
        if form.is_valid():
            form.save()
            return redirect('list_certificates')
    else:
        form = CertificateForm(instance=certificate)
    return render(request, 'certificates/edit.html', {'form': form})

# Delete a certificate
def delete_certificate(request, id):
    certificate = get_object_or_404(Certificate, id=id)
    certificate.delete()
    return redirect('list_certificates')
