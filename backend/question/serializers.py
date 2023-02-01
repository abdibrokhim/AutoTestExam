from rest_framework import serializers
from .models import Question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['options'] = {
            0: representation.pop('a'),
            1: representation.pop('b'),
            2: representation.pop('c', None),
            3: representation.pop('d', None),
        }
        return representation