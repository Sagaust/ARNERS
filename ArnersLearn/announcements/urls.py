from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_announcements, name='list_announcements'),
    path('create/', views.create_announcement, name='create_announcement'),
    path('edit/<int:id>/', views.edit_announcement, name='edit_announcement'),
    path('delete/<int:id>/', views.delete_announcement, name='delete_announcement'),
]
