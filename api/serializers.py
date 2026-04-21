from rest_framework import serializers
from .models import ContactInquiry
import re

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = '__all__'

    def validate_phone(self, value):
        cleaned = re.sub(r"[\s\-\(\)\+]", "", value)
        if not cleaned.isdigit():
            raise serializers.ValidationError("Phone must contain digits only (spaces, +, -, () allowed)")
        return value