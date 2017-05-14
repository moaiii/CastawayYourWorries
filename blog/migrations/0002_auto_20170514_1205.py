# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-14 12:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='hero_image',
            field=models.ImageField(default='blog/static/img/no-img.jpg', upload_to='blog/static/img/'),
        ),
        migrations.AlterField(
            model_name='post',
            name='created',
            field=models.DateTimeField(auto_now_add=True, db_index=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(db_index=True, max_length=255),
        ),
    ]
