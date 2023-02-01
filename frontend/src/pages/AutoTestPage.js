// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import axios from 'axios';
import NavigateQuestionButtons from '../components/NavigateQuestionButtons';
import QuestionHelperText from '../components/QuestionHelperText';
import Question from '../components/Question';
import AnswerAndImageWrapper from '../components/AnswerAndImageWrapper';
import MultipleChoices from '../components/MultipleChoices';
import QuestionImage from '../components/QuestionImage';
import BasicPageWrapper from '../components/BasicPageWrapper';
import data from '../data';

const AutoTestPage = () => {
    // const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // useEffect(() => {
    //     console.log('Fetching');
    //     axios.defaults.headers.post['Content-Type'] ='application/json; charset=utf-8';
    //     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    //     axios.get('/v1/api/question-list/')
    //         .then(res => {
    //             console.log(res.data);
    //             setQuestions(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, [questions]);

    return (
        // <BasicPageWrapper>
        //     <div>{currentQuestionIndex}</div>
        //     <div>{questions}</div>
        //     <Question query={questions[currentQuestionIndex].question}/>
        //     <AnswerAndImageWrapper>
        //         <MultipleChoices query={questions[currentQuestionIndex].options}/>
        //         <QuestionImage image={questions[currentQuestionIndex].image}/>
        //     </AnswerAndImageWrapper>
        //     <QuestionHelperText comment={questions[currentQuestionIndex].comment} />
        //     <NavigateQuestionButtons onQuestionClick={(index) => setCurrentQuestionIndex(index)} />
        // </BasicPageWrapper>
        <BasicPageWrapper>
            <div>{currentQuestionIndex}</div>
            <Question query={data[currentQuestionIndex].question}/>
            <AnswerAndImageWrapper>
                <MultipleChoices options={data[currentQuestionIndex].options}/>
                <QuestionImage image={data[currentQuestionIndex].image}/>
            </AnswerAndImageWrapper>
            <QuestionHelperText comment={data[currentQuestionIndex].comment} />
            <NavigateQuestionButtons onQuestionClick={(index) => setCurrentQuestionIndex(index)} />
        </BasicPageWrapper>
    );
}

export default AutoTestPage;
