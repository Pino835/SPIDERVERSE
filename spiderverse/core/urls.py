from django.urls import path
from .views import home_view, spider_view

urlpatterns = [
    path('', home_view, name="home"),
    path('spiderman/<int:pk>', spider_view, name="spider"),
]
