# myapp/urls.py

from django.urls import path
from .views import RegisterView, LoginView , check_login_status

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/check-login-status/' , LoginView.as_view() , name="check-login-status")
]
