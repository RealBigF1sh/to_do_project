from rest_framework.serializers import ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):

    class Meta():
        model = User
        fields = ('first_name', 'last_name', 'age', 'email', 'staff')


class UserModelSerializerBase(ModelSerializer):

    class Meta():
        model = User
        fields = ('first_name', 'last_name', 'age', 'email', 'superuser')