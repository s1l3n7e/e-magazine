from django.shortcuts import render, get_object_or_404
from .models import Item, Division

# Create your views here.


def display_items(request, name):
    items = Item.objects.filter(division__name=name)
    context = {
        'items': items
    }
    return render(request=request, template_name='catalog_list.html', context=context)


def catalog(request):
    items = Division.objects.all()
    context = {
        'items': items
    }
    return render(request=request, template_name='catalog.html', context=context)

