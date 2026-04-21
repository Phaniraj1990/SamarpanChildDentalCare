from django.urls import path
from . import views

urlpatterns = [
    path('contact', views.contact_inquiry, name='contact'),
    path('clinic-info', views.clinic_info, name='clinic-info'),
]