from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_enrollments, name='list_enrollments'),
    path('create/', views.create_enrollment, name='create_enrollment'),
    path('edit/<int:id>/', views.edit_enrollment, name='edit_enrollment'),
    path('delete/<int:id>/', views.delete_enrollment, name='delete_enrollment'),
]
