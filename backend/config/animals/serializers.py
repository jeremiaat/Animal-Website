from rest_framework import serializers
from .models import Animal

class AnimalSerializer(serializers.ModelSerializer):
	class Meta:
		model=Animal
		fields = ('id', 'name', 'description', 'image_url')

class AnimalDetailSerializer(serializers.ModelSerializer):
	class Meta:
		model = Animal
		fields = '__all__'

class AnimalFactsSerializser(serializers.ModelSerializer):
	class Meta:
		model = Animal
		fields = ('id','name', 'image_url','fact','scientific_name')