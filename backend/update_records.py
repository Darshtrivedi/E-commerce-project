import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from products.models import Product
from django.core.exceptions import MultipleObjectsReturned
# 
# try:
#     product = Product.objects.get(name="JBL Flip 6, Portable Bluetooth Speaker, Waterproof, 12 Hours Playtime, Dual Passive Radiators, Red")
# except MultipleObjectsReturned:
#     print("More than one product found!")
#     products = Product.objects.filter(name="JBL Flip 6, Portable Bluetooth Speaker, Waterproof, 12 Hours Playtime, Dual Passive Radiators, Red")
    # You can then decide how to handle multiple results here
# 

# Update the fields
# product.name = 'JBL Flip 6, Portable Bluetooth Speaker, Waterproof, 12 Hours Playtime, Dual Passive Radiators, Red'

# pname=input("name : ")
# path=input("path : ")
# products = Product.objects.filter(name=pname)

# for product in products:
#     product.image_path = path
#     product.save()
# product.image_path = 'https://images-cdn.ubuy.co.in/664e56c4187043670764ad20-jbl-flip-6-portable-waterproof-bluetooth.jpg'

# Save the changes
# product.save()

while True:
    pname=input("name : ")
    path=input("path : ")
    products = Product.objects.filter(name=pname)

    for product in products:
        product.image_path = path
        product.save()
    print("Product Inserted successfully")