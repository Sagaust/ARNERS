from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_masterclass_participants, name='list_masterclass_participants'),
    path('edit/<int:id>/', views.edit_masterclass_participant, name='edit_masterclass_participant'),
    path('delete/<int:id>/', views.delete_masterclass_participant, name='delete_masterclass_participant'),
]
