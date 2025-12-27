from django.db import models

# Create your models here.
from django.db import models

class Animal(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100)
    animal_class = models.CharField(max_length=100, db_column='class')
    order = models.CharField(max_length=100)
    family = models.CharField(max_length=100)
    habitat = models.CharField(max_length=255)
    continent = models.CharField(max_length=50)
    diet = models.CharField(max_length=50)
    size = models.CharField(max_length=100)
    lifespan = models.CharField(max_length=50)
    conservation_status = models.CharField(max_length=50)
    description = models.TextField()
    image_url = models.URLField()
    fact = models.TextField()

    def __str__(self):
        return self.name