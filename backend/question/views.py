from django.shortcuts import render
from rest_framework import generics
from .models import Question
from .serializers import QuestionSerializer
import random

# Create your views here.

class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionListSize(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        size = self.kwargs['size']
        all_questions = Question.objects.all()
        selected_questions = random.sample(list(all_questions), size)
        return selected_questions
