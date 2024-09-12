from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_id','name', 'company_name','category','description', 'price', 'discount', 'stock','ratings', 'number_of_ratings','image_path']
