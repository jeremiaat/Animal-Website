from django.shortcuts import render
from rest_framework import generics
from .models import Animal
from .serializers import AnimalFactsSerializser,AnimalSerializer,AnimalDetailSerializer
from django.db.models import Q
# Create your views here.
class AnimalListAPI(generics.ListAPIView):
	queryset = Animal.objects.all()[5:9]
	serializer_class = AnimalSerializer

class AnimalDetailView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Animal.objects.all()
	serializer_class = AnimalDetailSerializer

class AllAnimalsView(generics.ListAPIView):
	queryset = Animal.objects.all()
	serializer_class = AnimalSerializer

class AllFacts(generics.ListAPIView):
	queryset = Animal.objects.all()
	serializer_class = AnimalFactsSerializser

class AnimalSearch(generics.ListAPIView):
	serializer_class = AnimalSerializer
	def get_queryset(self):
		queryset = Animal.objects.all()
		query = self.request.query_params.get('q', None)
		if query:
			queryset = queryset.filter(
				Q (name__icontains=query) | Q(scientific_name__icontains=query)
				)
		return queryset  