from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from to_do.models import Project, ToDo
from to_do.serializers import ProjectModelSerializer, ToDoModelSerializer

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ProjectFilterViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all()
        if name:
            projects = projects.filter(name__contains=name)
        return projects

class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    pagination_class = ToDoLimitOffsetPagination
    