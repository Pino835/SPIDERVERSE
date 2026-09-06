from django.shortcuts import render, get_object_or_404
from .models import Spider, Villain

def home_view(request):
    spiders = Spider.objects.all()
    villains = Villain.objects.all()
    return render(request, 'core/home.html', {'spiders':spiders, 'villains':villains})

def spider_view(request, pk):
    spider = get_object_or_404(Spider, pk=pk)
    return render(request, 'core/spider.html', {'spider':spider})

def villain_view(request, pk):
    villain = get_object_or_404(Villain, pk=pk)
    return render(request, 'core/villain.html', {'villain':villain})
