from django.contrib import admin
from .models import Question

# Register your models here.

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question', 'a', 'b', 'c', 'd', 'image', 'comment', 'answer',)
    list_filter = ('question',)
    search_fields = ('question',)


admin.site.register(Question, QuestionAdmin)