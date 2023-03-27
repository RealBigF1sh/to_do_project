from django.urls import path
from .views import UserCustomViewSet

appname = 'users'
urlpatterns = [
    path('', UserCustomViewSet.as_view()),
]