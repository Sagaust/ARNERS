from django.urls import path
from . import views

urlpatterns = [
    # API endpoints (if you intend to have API endpoints, you might want to uncomment these and ensure you have corresponding views)
    # path('api/feedbacks/', views.feedback_list, name='api-feedback-list'),
    # path('api/feedbacks/<int:pk>/', views.feedback_detail, name='api-feedback-detail'),

    # Regular views that render templates
    path('feedbacks/', views.list_feedbacks, name='list_feedbacks'),
    path('feedbacks/create/', views.create_feedback, name='create_feedback'),
    path('feedbacks/edit/<int:id>/', views.edit_feedback, name='edit_feedback'),
    path('feedbacks/delete/<int:id>/', views.delete_feedback, name='delete_feedback'),
]
