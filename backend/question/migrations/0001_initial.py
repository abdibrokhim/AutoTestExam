# Generated by Django 4.1.6 on 2023-02-01 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=256)),
                ('a', models.CharField(max_length=256)),
                ('b', models.CharField(max_length=256)),
                ('c', models.CharField(blank=True, max_length=256, null=True)),
                ('d', models.CharField(blank=True, max_length=256, null=True)),
                ('answer', models.PositiveSmallIntegerField()),
            ],
        ),
    ]
