from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactInquiry
from .serializers import ContactInquirySerializer

@api_view(['GET', 'POST'])
def contact_inquiry(request):
    if request.method == 'POST':
        serializer = ContactInquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        error_msg = list(serializer.errors.values())[0][0]
        return Response({'detail': error_msg}, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        limit = int(request.query_params.get('limit', 100))
        inquiries = ContactInquiry.objects.all().order_by('-created_at')[:limit]
        serializer = ContactInquirySerializer(inquiries, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def clinic_info(request):
    return Response({
        "name": "Samarpan Child Dental Care",
        "doctor": "Dr Apexa P Yadav",
        "phone": "07048512696",
        "address": "105, First Floor, Sundaram Residency, Dharmanagar Road, near Jyotinagar, Water tank, Bharuch, Gujarat 392012",
        "hours": {
            "mon_sat": "10:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
            "sunday": "Holiday"
        },
    })