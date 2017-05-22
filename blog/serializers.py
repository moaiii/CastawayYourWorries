from rest_framework import serializers
from models import Post, Email

class PostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Post
        fields = ('title', 'description')

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ('name', 'email')