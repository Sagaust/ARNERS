from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.list_certificates, name='list_certificates'),
    path('create/', views.create_certificate, name='create_certificate'),
    path('edit/<int:id>/', views.edit_certificate, name='edit_certificate'),
    path('delete/<int:id>/', views.delete_certificate, name='delete_certificate'),
]
