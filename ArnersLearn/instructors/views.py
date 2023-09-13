# from django.shortcuts import render, redirect, get_object_or_404
# from .models import Instructor
# from .forms import InstructorForm  # Assuming you have a form for Instructor

# # Display all instructors
# def list_instructors(request):
#     instructors = Instructor.objects.all()
#     return render(request, 'instructors/list.html', {'instructors': instructors})

# # Create a new instructor
# def create_instructor(request):
#     if request.method == 'POST':
#         form = InstructorForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('list_instructors')
#     else:
#         form = InstructorForm()
#     return render(request, 'instructors/create.html', {'form': form})

# # Edit an instructor
# def edit_instructor(request, id):
#     instructor = get_object_or_404(Instructor, id=id)
#     if request.method == 'POST':
#         form = InstructorForm(request.POST, instance=instructor)
#         if form.is_valid():
#             form.save()
#             return redirect('list_instructors')
#     else:
#         form = InstructorForm(instance=instructor)
#     return render(request, 'instructors/edit.html', {'form': form})

# # Delete an instructor
# def delete_instructor(request, id):
#     instructor = get_object_or_404(Instructor, id=id)
#     instructor.delete()
#     return redirect('list_instructors')


from rest_framework import generics
from .models import Instructor
from .serializers import InstructorSerializer

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class InstructorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
