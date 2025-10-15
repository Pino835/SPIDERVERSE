from django.urls import path
from .views import home_view, spiders_view, spider_view, villains_view, villain_view

urlpatterns = [
    path('', home_view, name="home"),
    path('spider_people/', spiders_view, name="spiders"),
    path('spider_people/<int:pk>', spider_view, name="spider"),
    path('villains/', villains_view, name="villains"),
    path('villains/<int:pk>', villain_view, name="villain"),
]
