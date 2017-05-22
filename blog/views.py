# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from blog.models import Post, General
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from models import Post, Email
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from serializers import PostSerializer


def index(request):
    posts = Post.objects.filter(published=True)
    general = General.objects.get(pk=1)
    return render(request, 'index.html', {'posts':posts, 'general':general})

def post(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'post.html', {'post':post})

@csrf_exempt
def post_list(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def post_detail(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method =='GET':
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def email_list(request):
    if request.method == 'GET':
        emails = Email.objects.all()
        serializer = EmailSerializer(emails, many=True)
        return JsonResponse(serializer.data, safe=False)