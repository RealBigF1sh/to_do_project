from django.urls import path
from .views import UserMyViewSet

appname = 'users'
urlpatterns = [
    path('', UserMyViewSet.as_view()),
]