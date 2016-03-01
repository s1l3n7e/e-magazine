from django.db import models

# Create your models here.


class Division(models.Model):
    name = models.CharField(max_length=20)


class Item(models.Model):
    name = models.CharField(max_length=20)
    header = models.CharField(max_length=30)
    description = models.TextField()
    price = models.IntegerField()
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
