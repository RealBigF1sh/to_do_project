from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(max_length=1024,null=True,blank=True)
    creator = models.ManyToManyField(User)
    repository = models.URLField(blank=True)

    def __str__(self):
        return self.name

class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.TextField(max_length=1024,null=True,blank=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
