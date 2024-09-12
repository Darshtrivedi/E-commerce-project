from django.urls import path
from products import views

urlpatterns = [
    path('product/',views.ProductList.as_view()),
    path('<int:product_id>/', views.ProductDetailView.as_view(), name='product-detail'),
    ]