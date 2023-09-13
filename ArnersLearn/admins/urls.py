from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_admins, name='list_admins'),
    path('create/', views.create_admin, name='create_admin'),
    path('edit/<int:id>/', views.edit_admin, name='edit_admin'),
    path('delete/<int:id>/', views.delete_admin, name='delete_admin'),
]
