from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_assignments, name='list_assignments'),
    path('create/', views.create_assignment, name='create_assignment'),
    path('edit/<int:id>/', views.edit_assignment, name='edit_assignment'),
    path('delete/<int:id>/', views.delete_assignment, name='delete_assignment'),
]
