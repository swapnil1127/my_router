from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.


def index_redirect(request):
    return redirect('/router/')