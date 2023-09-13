from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_managers, name='list_managers'),
    path('create/', views.create_manager, name='create_manager'),
    path('edit/<int:id>/', views.edit_manager, name='edit_manager'),
    path('delete/<int:id>/', views.delete_manager, name='delete_manager'),
]
