# Generated by Django 2.2.6 on 2019-11-21 03:25

from django.db import migrations

def load_data(apps, schema_editor):
    Site = apps.get_model('sites', 'Site')
    Site.objects.filter(id=1).update(name="dailyoffice2019.com", domain="dailyoffice2019.com")

def reverse_load_data(apps, schema_editor):
    Site = apps.get_model('sites', 'Site')
    Site.objects.filter(id=1).update(name="example.com", domain="example.com")

class Migration(migrations.Migration):

    dependencies = [('sites', '0002_alter_domain_unique')]

    operations = [migrations.RunPython(load_data, reverse_load_data)]