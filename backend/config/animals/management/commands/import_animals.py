import csv
from django.core.management.base import BaseCommand
from animals.models import Animal

class Command(BaseCommand):
    help = 'Imports animal data from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='The path to the CSV file to import.')

    def handle(self, *args, **options):
        file_path = options['csv_file']

        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                Animal.objects.create(
                    id=row['id'],
                    name=row['name'],
                    scientific_name=row['scientific_name'],
                    animal_class=row['class'],
                    order=row['order'],
                    family=row['family'],
                    habitat=row['habitat'],
                    continent=row['continent'],
                    diet=row['diet'],
                    size=row['size'],
                    lifespan=row['lifespan'],
                    conservation_status=row['conservation_status'],
                    description=row['description'],
                    image_url=row['image_url'],
                    fact=row['fact']
                )
        self.stdout.write(self.style.SUCCESS('Data imported successfully!'))