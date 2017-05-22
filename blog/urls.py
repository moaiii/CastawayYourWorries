from blog.views import index, post, post_detail, email_list
from django.conf import settings
from django.conf.urls import *
from django.conf.urls.static import static
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^(?P<slug>[\w\-]+)/$', post, name='post'),
    url(r'^api/posts/(?P<pk>[0-9]+)/$', post_detail),
    url(r'^api/emails/$', email_list),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)