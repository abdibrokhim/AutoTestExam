import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import axios from 'axios';
import NavigateQuestionButtons from '../components/NavigateQuestionButtons';
import QuestionHelperText from '../components/QuestionHelperText';
import Question from '../components/Question';
import MultipleChoicesAndImageWrapper from '../components/MultipleChoicesAndImageWrapper';
import MultipleChoices from '../components/MultipleChoices';
import QuestionImage from '../components/QuestionImage';
import BasicPageWrapper from '../components/BasicPageWrapper';
import data from '../data';

const AutoTestPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    // const [loading, setLoading] = useState(true);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(2);

    useEffect(() => {
        console.log('----------start-----------');
        console.log('----------answer-----------')
        console.log(data[currentQuestionIndex].answer);
        console.log('----------choosen-----------')
        console.log(currentAnswer);
        console.log('----------checker-----------')
        console.log(parseInt(currentAnswer) === data[currentQuestionIndex].answer)
        if (parseInt(currentAnswer) === data[currentQuestionIndex].answer) {
            console.log('Correct');
            setIsAnsweredCorrectly(1);
        } else {
            console.log('Incorrect');
            setIsAnsweredCorrectly(0);
        }
    }, [currentAnswer, currentQuestionIndex]);

    useEffect(() => {   
        if (isAnsweredCorrectly) {
            // console.log('Correct');
            if (currentQuestionIndex < data.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        } else {
            // console.log('Incorrect');
        }
    }, [isAnsweredCorrectly, currentQuestionIndex]);

    useEffect(() => {
        console.log('Fetching');
        axios.defaults.headers.post['Content-Type'] ='application/json; charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('/v1/api/question-list/')
            .then(res => {
                console.log(res.data);
                setQuestions(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [questions]);

    return (
        // <BasicPageWrapper>
        //     <div>{currentQuestionIndex}</div>
        //     <div>{questions}</div>
        //     <Question query={questions[currentQuestionIndex].question}/>
        //     <MultipleChoicesAndImageWrapper>
        //         <MultipleChoices query={questions[currentQuestionIndex].options}/>
        //         <QuestionImage image={questions[currentQuestionIndex].image}/>
        //     </MultipleChoicesAndImageWrapper>
        //     <QuestionHelperText comment={questions[currentQuestionIndex].comment} />
        //     <NavigateQuestionButtons onQuestionClick={(index) => setCurrentQuestionIndex(index)} />
        // </BasicPageWrapper>
        // <BasicPageWrapper>
        //     <div>Current Question: {currentQuestionIndex}</div>
        //     <div>Choosen Answer Index: {currentAnswer}</div>
        //     <Question 
        //         query={data[currentQuestionIndex].question} />
        //     <MultipleChoicesAndImageWrapper>
        //         <MultipleChoices 
        //             options={data[currentQuestionIndex].options}
        //             onChoiceClick={(index) => setCurrentAnswer(index)} 
        //             isAnsweredCorrectly={isAnsweredCorrectly}/>
        //         <QuestionImage 
        //             image={data[currentQuestionIndex].image} />
        //     </MultipleChoicesAndImageWrapper>
        //     <QuestionHelperText 
        //         comment={data[currentQuestionIndex].comment} />
        //     <NavigateQuestionButtons 
        //         onQuestionClick={(index) => setCurrentQuestionIndex(index)} 
        //         isAnsweredCorrectly={isAnsweredCorrectly} />
        // </BasicPageWrapper>
        <BasicPageWrapper>
            <div>Current Question: {currentQuestionIndex}</div>
            <div>Choosen Answer Index: {currentAnswer}</div>
            <Question 
                query={questions[currentQuestionIndex].question} />
            <MultipleChoicesAndImageWrapper>
                <MultipleChoices 
                    options={questions[currentQuestionIndex].options}
                    onChoiceClick={(index) => setCurrentAnswer(index)} 
                    isAnsweredCorrectly={isAnsweredCorrectly}/>
                <QuestionImage 
                    image={questions[currentQuestionIndex].image} />
            </MultipleChoicesAndImageWrapper>
            <QuestionHelperText 
                comment={questions[currentQuestionIndex].comment} />
            <NavigateQuestionButtons 
                onQuestionClick={(index) => setCurrentQuestionIndex(index)} 
                isAnsweredCorrectly={isAnsweredCorrectly} />
        </BasicPageWrapper>
    );
}

export default AutoTestPage;
