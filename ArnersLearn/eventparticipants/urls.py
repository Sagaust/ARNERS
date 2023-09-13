from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_eventparticipants, name='list_eventparticipants'),
    path('create/', views.create_eventparticipant, name='create_eventparticipant'),
    path('edit/<int:id>/', views.edit_eventparticipant, name='edit_eventparticipant'),
    path('delete/<int:id>/', views.delete_eventparticipant, name='delete_eventparticipant'),
]
