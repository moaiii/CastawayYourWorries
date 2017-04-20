from django.conf.urls import *
from blog.views import index, post


urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^(?P<slug>[\w\-]+)/$', post, name='post')
]