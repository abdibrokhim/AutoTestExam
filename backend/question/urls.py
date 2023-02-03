from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import QuestionList, QuestionDetail, QuestionListSize

urlpatterns = [
    path('question-list/', QuestionList.as_view()),
    path('question-list/size/<int:size>', QuestionListSize.as_view()),
    path('question-detail/<int:pk>/', QuestionDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)