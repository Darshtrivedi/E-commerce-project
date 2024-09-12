# from django.shortcuts import render
from .models import Product
from .serializers import ProductSerializer
from rest_framework.generics import ListAPIView


class ProductList(ListAPIView):
    # queryset = Product.objects.all()[:5]
    queryset = Product.objects.all().order_by('price')[:6]  # Ascending
    serializer_class=ProductSerializer
    

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class ProductDetailView(ListAPIView): #APIView
    def get(self, request, product_id, *args, **kwargs):
        try:
            product = Product.objects.get(product_id=product_id)
            serializer = ProductSerializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
