"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from rest_framework import permissions
from users.views import UserCustomViewSet
from to_do.views import ProjectFilterViewSet, ToDoModelViewSet
import users.urls
from rest_framework.authtoken import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView

router = DefaultRouter()
router.register('users', UserCustomViewSet)
router.register('project', ProjectFilterViewSet)
router.register('to_do', ToDoModelViewSet)

schema_view = get_schema_view(
    openapi.Info(
    title="Todo",
    default_version="1.0",
    description="Todo_project description",
    contact=openapi.Contact(email="kz@gmail.com"),
    license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    re_path(r'^api/(?P<version>\d.\d)/users/$', UserCustomViewSet.as_view()),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls') ),
    re_path(r'^swagger/(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api-token-auth/', views.obtain_auth_token),
]

