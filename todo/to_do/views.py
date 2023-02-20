from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from to_do.models import Project, ToDo
from to_do.serializers import ProjectModelSerializer, ToDoModelSerializer

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer

class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    