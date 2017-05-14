# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse 
from blog.models import Post


def index(request):
    posts = Post.objects.filter(published=True)
    return render(request, 'index.html', {'posts':posts})

def post(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'post.html', {'post':post})
