from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser

# Create your models here.


class User(AbstractBaseUser):
    first_name = models.CharField(max_length=64);
    last_name = models.CharField(max_length=64);
    age = models.PositiveIntegerField();
    email = models.EmailField(unique=True);

