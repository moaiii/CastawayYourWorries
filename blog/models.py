# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.urls import reverse

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    description = models.CharField(max_length=255)
    content = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255)
    # hero_image = models.ImageField()
    # image_one = models.ImageField()
    # image_one_caption = models.TextField()
    # image_two = models.ImageField()
    # image_two_caption = models.TextField()
    # image_three = models.ImageField()
    # image_three_caption = models.TextField()
    # image_four = models.ImageField()
    # image_four_caption = models.TextField()
    # image_five = models.ImageField()
    # image_five_caption = models.TextField()

    def get_absolute_url(self):
        return reverse('post', args=[self.slug])

class Meta:
    ordering = ['-created']

    def __unicode__(self):
        return u'%s' % self.title