from django.shortcuts import render, redirect, get_object_or_404
from .models import Masterclass
from .forms import MasterclassForm  # Assuming you have a form for Masterclass

# Display all masterclasses
def list_masterclasses(request):
    masterclasses = Masterclass.objects.all()
    return render(request, 'masterclasses/list.html', {'masterclasses': masterclasses})

# Create a new masterclass
def create_masterclass(request):
    if request.method == 'POST':
        form = MasterclassForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_masterclasses')
    else:
        form = MasterclassForm()
    return render(request, 'masterclasses/create.html', {'form': form})

# Edit a masterclass
def edit_masterclass(request, id):
    masterclass = get_object_or_404(Masterclass, id=id)
    if request.method == 'POST':
        form = MasterclassForm(request.POST, instance=masterclass)
        if form.is_valid():
            form.save()
            return redirect('list_masterclasses')
    else:
        form = MasterclassForm(instance=masterclass)
    return render(request, 'masterclasses/edit.html', {'form': form})

# Delete a masterclass
def delete_masterclass(request, id):
    masterclass = get_object_or_404(Masterclass, id=id)
    masterclass.delete()
    return redirect('list_masterclasses')
