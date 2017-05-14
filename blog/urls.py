from django.conf.urls import *
from django.conf.urls.static import static
from django.conf import settings
from blog.views import index, post


urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'^(?P<slug>[\w\-]+)/$', post, name='post'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)