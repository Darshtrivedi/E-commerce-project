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


class ProductSearchView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        user_input = request.data.get('search_term', None)  # Get search term from request body
        
        if not user_input:
            return Response({"error": "No input provided"}, status=400)

        # Try to find products by category or name
        try:
            products_by_category = Product.objects.filter(category__icontains=user_input)
        except Product.DoesNotExist:
            products_by_category = []

        try:
            products_by_name = Product.objects.filter(name__icontains=user_input)
        except Product.DoesNotExist:
            products_by_name = []

        # Combine the querysets (remove duplicates if any)
        products = products_by_category | products_by_name
        products = products.distinct()  # Remove duplicates

        if products.exists():
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=200)
        else:
            return Response({"error": "No products found"}, status=404)
