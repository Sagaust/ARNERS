from django.urls import path
from . import views

urlpatterns = [
    path('participants/', views.ParticipantList.as_view(), name='participant-list'),
    path('participants/<int:pk>/', views.ParticipantDetail.as_view(), name='participant-detail'),
]
