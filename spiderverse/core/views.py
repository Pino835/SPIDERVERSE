from django.shortcuts import render, get_object_or_404
from .models import Spider

def home_view(request):
    spiders = Spider.objects.all()
    return render(request, 'core/home.html', {'spiders':spiders})

def spider_view(request, pk):
    spider = get_object_or_404(Spider, pk=pk)
    return render(request, 'core/spider.html', {'spider':spider})
