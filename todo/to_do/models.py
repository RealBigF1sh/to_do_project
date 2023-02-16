from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(max_length=1024,null=True,blank=True)
    creator = models.ManyToManyField(User)
    repository = models.URLField()

class To_Do(models.Model):
    to_project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.TextField(max_length=1024,null=True,blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
