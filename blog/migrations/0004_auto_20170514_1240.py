# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-14 12:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20170514_1211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='hero_image',
            field=models.ImageField(default='/blog/static/img/no-img.jpg', upload_to='blog/static/img/'),
        ),
    ]
