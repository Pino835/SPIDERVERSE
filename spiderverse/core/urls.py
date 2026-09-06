from django.urls import path
from .views import home_view, spider_view, villain_view

urlpatterns = [
    path('', home_view, name="home"),
    path('spider_people/<int:pk>', spider_view, name="spider"),
    path('villains/<int:pk>', villain_view, name="villain"),
]
