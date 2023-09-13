from django.shortcuts import render, redirect, get_object_or_404
from .models import Manager
from .forms import ManagerForm  # Assuming you have a form for Manager

# Display all managers
def list_managers(request):
    managers = Manager.objects.all()
    return render(request, 'managers/list.html', {'managers': managers})

# Create a new manager
def create_manager(request):
    if request.method == 'POST':
        form = ManagerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_managers')
    else:
        form = ManagerForm()
    return render(request, 'managers/create.html', {'form': form})

# Edit a manager
def edit_manager(request, id):
    manager = get_object_or_404(Manager, id=id)
    if request.method == 'POST':
        form = ManagerForm(request.POST, instance=manager)
        if form.is_valid():
            form.save()
            return redirect('list_managers')
    else:
        form = ManagerForm(instance=manager)
    return render(request, 'managers/edit.html', {'form': form})

# Delete a manager
def delete_manager(request, id):
    manager = get_object_or_404(Manager, id=id)
    manager.delete()
    return redirect('list_managers')
