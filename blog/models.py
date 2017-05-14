# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.urls import reverse

class Post(models.Model):
    title = models.CharField(db_index=True, max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    description = models.CharField(max_length=255)
    content = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateTimeField(db_index=True, auto_now_add=True)
    location = models.CharField(max_length=255)
    # hero_image = models.ImageField()
    # image_one = models.ImageField()
    # image_one_caption = models.TextField()

    def get_absolute_url(self):
        return reverse('post', args=[self.slug])

    def __str__(self):
        return "%s : %s : %d" % (self.title, self.created, self.id)

    def get_next_post(self):
        next_id = self.id + 1
        size = self.get_post_count()
        if(next_id > size):
            return Post.objects.get(id=1)
        else:
            return Post.objects.get(id=next_id)

    def get_previous_post(self):
        prev_id = self.id - 1
        size = self.get_post_count()
        if(prev_id == 0):
            return Post.objects.get(id=size)
        else:
            return Post.objects.get(id=prev_id)

    def get_post_count(self):
        return Post.objects.all().count()

class Meta:
    ordering = ['-created']

    def __unicode__(self):
        return u'%s' % self.title