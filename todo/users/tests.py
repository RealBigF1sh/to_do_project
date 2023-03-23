import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory, force_authenticate, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from .views import UserCustomViewSet
from .models import User


class TestUserCustomViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UserCustomViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_get_detail(self):
        user = User.objects.create(**{'first_name':'Sergei', 'last_name':'Fedorov', 'age':33})
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def tearDown(self) -> None:
        pass

class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        import math
        self.assertEqual(math.sqrt(4), 2)
