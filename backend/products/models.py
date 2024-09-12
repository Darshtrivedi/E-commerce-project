from django.db import models

# class Category(models.Model):
#     name = models.CharField(max_length=255, unique=True)

#     def __str__(self):
#         return self.name

class Product(models.Model):
    product_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=50, decimal_places=2)
    discount = models.DecimalField(max_digits=20,decimal_places=2)
    stock = models.IntegerField(default=0)
    ratings = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    number_of_ratings = models.IntegerField(default=0)
    image_path = models.CharField(max_length=255, null=True, blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# id	name	price	discount	company	category	specification/description	details	ratings	number of ratings	stock
