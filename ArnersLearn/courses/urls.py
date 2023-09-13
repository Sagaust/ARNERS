from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_courses, name='list_courses'),
    path('create/', views.create_course, name='create_course'),
    path('edit/<int:id>/', views.edit_course, name='edit_course'),
    path('delete/<int:id>/', views.delete_course, name='delete_course'),
    path('detail/<int:id>/', views.course_detail, name='course_detail'),

]
