from django.shortcuts import render, redirect, get_object_or_404
from .models import CourseEnrollment
from .forms import CourseEnrollmentForm  # Assuming you have a form for CourseEnrollment

# Display all enrollments
def list_enrollments(request):
    enrollments = CourseEnrollment.objects.all()
    return render(request, 'courseenrollments/list.html', {'enrollments': enrollments})

# Create a new enrollment
def create_enrollment(request):
    if request.method == 'POST':
        form = CourseEnrollmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_enrollments')
    else:
        form = CourseEnrollmentForm()
    return render(request, 'courseenrollments/create.html', {'form': form})

# Edit an enrollment
def edit_enrollment(request, id):
    enrollment = get_object_or_404(CourseEnrollment, id=id)
    if request.method == 'POST':
        form = CourseEnrollmentForm(request.POST, instance=enrollment)
        if form.is_valid():
            form.save()
            return redirect('list_enrollments')
    else:
        form = CourseEnrollmentForm(instance=enrollment)
    return render(request, 'courseenrollments/edit.html', {'form': form})

# Delete an enrollment
def delete_enrollment(request, id):
    enrollment = get_object_or_404(CourseEnrollment, id=id)
    enrollment.delete()
    return redirect('list_enrollments')
