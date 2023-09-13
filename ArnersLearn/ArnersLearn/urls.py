from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from ArnersLearn.views import home_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('api/participants/', include('participants.urls')),  # Including the participants app's urls
    path('api/courses/', include('courses.urls')),            # Including the courses app's urls
    path('api/events/', include('events.urls')),              # Including the events app's urls
    path('api/assignments/', include('assignments.urls')),      
    path('api/certificates/', include('certificates.urls')), 
    path('api/courseenrollments/', include('courseenrollments.urls')), 
    path('api/coursematerials/', include('coursematerials.urls')), 
    path('api/eventparticipants/', include('eventparticipants.urls')), 
    path('api/feedback/', include('feedback.urls')), 
    path('api/instructors/', include('instructors.urls')), 
    path('api/managers/', include('managers.urls')), 
    path('api/masterclassparticipants/', include('masterclassparticipants.urls')), 
    path('api/quizzes/', include('quizzes.urls')), 
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
