from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_quizzes, name='list_quizzes'),
    path('edit/<int:id>/', views.edit_quiz, name='edit_quiz'),
    path('delete/<int:id>/', views.delete_quiz, name='delete_quiz'),
]
