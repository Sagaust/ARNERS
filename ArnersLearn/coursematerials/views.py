from django.shortcuts import render, redirect, get_object_or_404
from .models import CourseMaterial
from .forms import CourseMaterialForm  # Assuming you have a form for CourseMaterial

# Display all course materials
def list_coursematerials(request):
    coursematerials = CourseMaterial.objects.all()
    return render(request, 'coursematerials/list.html', {'coursematerials': coursematerials})

# Create a new course material
def create_coursematerial(request):
    if request.method == 'POST':
        form = CourseMaterialForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_coursematerials')
    else:
        form = CourseMaterialForm()
    return render(request, 'coursematerials/create.html', {'form': form})

# Edit a course material
def edit_coursematerial(request, id):
    coursematerial = get_object_or_404(CourseMaterial, id=id)
    if request.method == 'POST':
        form = CourseMaterialForm(request.POST, instance=coursematerial)
        if form.is_valid():
            form.save()
            return redirect('list_coursematerials')
    else:
        form = CourseMaterialForm(instance=coursematerial)
    return render(request, 'coursematerials/edit.html', {'form': form})

# Delete a course material
def delete_coursematerial(request, id):
    coursematerial = get_object_or_404(CourseMaterial, id=id)
    coursematerial.delete()
    return redirect('list_coursematerials')
