from django.urls import path
from . import views

urlpatterns = [
    # Notice we changed views.ContactView.as_view() to views.contact_inquiry!
    path('contact/', views.contact_inquiry, name='contact'),
    path('clinic-info/', views.clinic_info, name='clinic-info'),
]