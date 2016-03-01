from django.shortcuts import render, get_object_or_404
from .models import Item, Division

# Create your views here.


def display_items(request, name):
    items = Item.objects.filter(division__name = name)
    context = {
        'items': items
    }
    return render(request, 'catalog_list.html', context=context)
