from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.ContactView.as_view(), name='contact'),
    path('clinic-info/', views.clinic_info, name='clinic-info'),
]