from django.urls import path
from .views import InstructorListCreateView, InstructorRetrieveUpdateDestroyView

urlpatterns = [
    path('instructors/', InstructorListCreateView.as_view(), name='instructor-list-create'),
    path('instructors/<int:pk>/', InstructorRetrieveUpdateDestroyView.as_view(), name='instructor-detail')
]
