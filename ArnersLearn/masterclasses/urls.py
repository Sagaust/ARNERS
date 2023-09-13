from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_masterclasses, name='list_masterclasses'),
    path('create/', views.create_masterclass, name='create_masterclass'),
    path('edit/<int:id>/', views.edit_masterclass, name='edit_masterclass'),
    path('delete/<int:id>/', views.delete_masterclass, name='delete_masterclass'),
]
