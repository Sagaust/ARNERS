from django.shortcuts import render, redirect, get_object_or_404
from .models import Course
from .forms import CourseForm  # Assuming you have a form for Course

# Display all courses
def list_courses(request):
    courses = Course.objects.all()
    return render(request, 'courses/list.html', {'courses': courses})

def course_detail(request, id):
    course = get_object_or_404(Course, id=id)
    return render(request, 'courses/detail.html', {'course': course})

# Create a new course
def create_course(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_courses')
    else:
        form = CourseForm()
    return render(request, 'courses/create.html', {'form': form})

# Edit a course
def edit_course(request, id):
    course = get_object_or_404(Course, id=id)
    if request.method == 'POST':
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            return redirect('list_courses')
    else:
        form = CourseForm(instance=course)
    return render(request, 'courses/edit.html', {'form': form})

# Delete a course
def delete_course(request, id):
    course = get_object_or_404(Course, id=id)
    course.delete()
    return redirect('list_courses')

# from rest_framework import generics
# from .models import Course
# from .serializers import CourseSerializer

# class CourseListCreateView(generics.ListCreateAPIView):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer

# class CourseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer
