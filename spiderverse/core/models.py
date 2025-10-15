from django.db import models

class Spider(models.Model):
    alias = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    universe = models.CharField(max_length=100)
    description = models.TextField()
    power = models.TextField()
    image1 = models.URLField()
    image2 = models.URLField()
    
    def __str__(self):
        return self.name
