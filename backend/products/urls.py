from django.urls import path
from .views import ProductList , ProductDetailView , ProductSearchView

urlpatterns = [
    path('product/',ProductList.as_view()),
    path('<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
    path('product-search/' , ProductSearchView.as_view())
    ]