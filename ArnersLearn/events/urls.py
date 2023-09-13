from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_events, name='list_events'),
    path('create/', views.create_event, name='create_event'),
    path('edit/<int:id>/', views.edit_event, name='edit_event'),
    path('delete/<int:id>/', views.delete_event, name='delete_event'),
]
