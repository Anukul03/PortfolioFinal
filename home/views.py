from django.shortcuts import render
from .models import Project, Experience
from .database import PROJECTS, EXPERIENCES


def home(request):
    return render(request, 'home.html')


def projects(request):
    projects = [Project(**data) for data in PROJECTS]
    return render(request, 'projects.html', {'projects': projects})



def experience(request):
    experiences = [Experience(**data) for data in EXPERIENCES]
    return render(request, 'experience.html', {'experiences': experiences})


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')