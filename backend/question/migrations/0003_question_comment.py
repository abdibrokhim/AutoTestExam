# Generated by Django 4.1.6 on 2023-02-01 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0002_question_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='comment',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
