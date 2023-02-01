import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigateQuestionButtons from '../components/NavigateQuestionButtons';
import QuestionHelperText from '../components/QuestionHelperText';
import Question from '../components/Question';
import AnswerAndImageWrapper from '../components/AnswerAndImageWrapper';
import MultipleChoices from '../components/MultipleChoices';
import QuestionImage from '../components/QuestionImage';
import BasicPageWrapper from '../components/BasicPageWrapper';

const AutoTestPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        console.log('Fetching');
        axios.get('http://127.0.0.1:8000/v1/api/question-list/')
            .then(res => {
                console.log(res.data);
                setQuestions(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <BasicPageWrapper>
            <div>{currentQuestionIndex}</div>
            <Question query={questions[currentQuestionIndex].question} />
            <AnswerAndImageWrapper>
                <MultipleChoices options={questions[currentQuestionIndex].options} />
                <QuestionImage image={questions[currentQuestionIndex].image} />
            </AnswerAndImageWrapper>
            <QuestionHelperText comment={questions[currentQuestionIndex].comment} />
            <NavigateQuestionButtons onQuestionClick={(index) => setCurrentQuestionIndex(index)} />
        </BasicPageWrapper>
    );
}

export default AutoTestPage;
