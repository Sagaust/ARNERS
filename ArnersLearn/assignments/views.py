from django.shortcuts import render, redirect, get_object_or_404
from .models import Assignment
from .forms import AssignmentForm  # Assuming you have a form for Assignment

# Display all assignments
def list_assignments(request):
    assignments = Assignment.objects.all()
    return render(request, 'assignments/list.html', {'assignments': assignments})

# Create a new assignment
def create_assignment(request):
    if request.method == 'POST':
        form = AssignmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_assignments')
    else:
        form = AssignmentForm()
    return render(request, 'assignments/create.html', {'form': form})

# Edit an assignment
def edit_assignment(request, id):
    assignment = get_object_or_404(Assignment, id=id)
    if request.method == 'POST':
        form = AssignmentForm(request.POST, instance=assignment)
        if form.is_valid():
            form.save()
            return redirect('list_assignments')
    else:
        form = AssignmentForm(instance=assignment)
    return render(request, 'assignments/edit.html', {'form': form})

# Delete an assignment
def delete_assignment(request, id):
    assignment = get_object_or_404(Assignment, id=id)
    assignment.delete()
    return redirect('list_assignments')
