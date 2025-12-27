from django.urls import path
from .views import AllFacts,AnimalListAPI,AnimalDetailView,AllAnimalsView,AnimalSearch

urlpatterns = [
    path('api/animals/', AnimalListAPI.as_view(), name='animal-list'),
    path('api/animals/<int:pk>/',AnimalDetailView.as_view(),name='animal-detail' ),
    path('api/allanimals/' , AllAnimalsView.as_view(), name='Allanimals'),
    path('api/allfacts', AllFacts.as_view(), name='Facts'),
    path('api/searchanimals/', AnimalSearch.as_view(), name='search-animals')

]