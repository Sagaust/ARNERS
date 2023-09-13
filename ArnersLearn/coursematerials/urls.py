from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_coursematerials, name='list_coursematerials'),
    path('create/', views.create_coursematerial, name='create_coursematerial'),
    path('edit/<int:id>/', views.edit_coursematerial, name='edit_coursematerial'),
    path('delete/<int:id>/', views.delete_coursematerial, name='delete_coursematerial'),
]
