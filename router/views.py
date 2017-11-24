# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from router.models import Router
# Create your views here.


def index(request):
    return render(request, 'index.html')

def create(request):
    sapid = str(request.POST.get('sapid','')).strip()
    host_name = str(request.POST.get('host_name','')).strip()
    loopback = str(request.POST.get('loopback','')).strip()
    mac_address = str(request.POST.get('mac_address')).strip()

    routers = Router.objects.create(sapid=sapid,host_name=host_name,loopback=loopback,mac_address=mac_address)
    routers.save()
    return redirect('/')


def read(request):
    routers = Router.objects.all()
    return render(request,'result.html',{'routers':routers})

def delete(request,id):
    router = Router.objects.get(id=id)
    router.active=0
    router.save()
    return redirect('/router/')

def edit(request,id):
    router = Router.objects.get(id=id)
    return render(request, 'edit.html',{"router":router})

def update(request,id):
    sapid = str(request.POST.get('sapid', '')).strip()
    host_name = str(request.POST.get('host_name', '')).strip()
    loopback = str(request.POST.get('loopback', '')).strip()
    mac_address = str(request.POST.get('mac_address')).strip()

    router = Router.objects.get(id=id)
    router.sapid = sapid
    router.host_name = host_name
    router.loopback = loopback
    router.mac_address = mac_address
    router.save()
    return redirect('/router/')