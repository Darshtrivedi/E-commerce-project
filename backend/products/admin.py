from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_id','name', 'company_name','category','description', 'price', 'discount', 'stock','ratings', 'number_of_ratings','image_path') # Add other fields as needed
