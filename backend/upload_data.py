import csv
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from products.models import Product

# with open('Book1.csv', newline='') as csvfile:
#     reader = csv.DictReader(csvfile)
#     for row in reader:
#         Student.objects.create(
#             stuname=row['username'],
#             email=row['email'],
#         )

# Products

with open('updated_products_with_stock.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    counter=0
    for row in reader:
        Product.objects.create(
            product_id = row['id'],
            name = row['name'],
            company_name = row['company'],
            category = row['category'],
            description = row['specification/description'],
            price = row['price'],
            discount = row['discount'],
            stock = row['stock'],
            ratings = row['ratings'],
            number_of_ratings = row['number of ratings'],
        )

# x=Product.objects.all()
# for i in x:
#     print(i.id," : ",i.name)