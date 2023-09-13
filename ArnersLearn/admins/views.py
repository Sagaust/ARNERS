from django.shortcuts import render, redirect, get_object_or_404
from .models import Admin
from .forms import AdminForm  # Assuming you have a form for Admin

# Display all admins
def list_admins(request):
    admins = Admin.objects.all()
    return render(request, 'admins/list.html', {'admins': admins})

# Create a new admin
def create_admin(request):
    if request.method == 'POST':
        form = AdminForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_admins')
    else:
        form = AdminForm()
    return render(request, 'admins/create.html', {'form': form})

# Edit an admin
def edit_admin(request, id):
    admin = get_object_or_404(Admin, id=id)
    if request.method == 'POST':
        form = AdminForm(request.POST, instance=admin)
        if form.is_valid():
            form.save()
            return redirect('list_admins')
    else:
        form = AdminForm(instance=admin)
    return render(request, 'admins/edit.html', {'form': form})

# Delete an admin
def delete_admin(request, id):
    admin = get_object_or_404(Admin, id=id)
    admin.delete()
    return redirect('list_admins')
