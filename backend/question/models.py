from django.db import models

# Create your models here.

class Question(models.Model):
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    question = models.CharField(max_length=1000)
    a = models.CharField(max_length=518)
    b = models.CharField(max_length=518)
    c = models.CharField(max_length=518, null=True, blank=True)
    d = models.CharField(max_length=518, null=True, blank=True)
    comment = models.CharField(max_length=1000, null=True, blank=True)
    answer = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.question
