import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
// import React, { useState } from 'react';
// import axios from 'axios';
import NavigateQuestionButtons from '../components/NavigateQuestionButtons';
import QuestionHelperText from '../components/QuestionHelperText';
import Question from '../components/Question';
import MultipleChoicesAndImageWrapper from '../components/MultipleChoicesAndImageWrapper';
import MultipleChoices from '../components/MultipleChoices';
import QuestionImage from '../components/QuestionImage';
import SecondaryPageWrapper from '../components/SecondaryPageWrapper';
// import data from '../data';
import QuestionPicker from '../components/QuestionPicker';
import PrimaryPageWrapper from '../components/PrimaryPageWrapper';
import colors from '../colors';

const AutoTestPage = () => {
    let { testAmount } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    // const [loading, setLoading] = useState(true);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState('');
    // const [buttonId, setButtonId] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     console.log('----------start-----------');
    //     console.log('----------answer-----------')
    //     console.log(data[currentQuestionIndex].answer);
    //     console.log('----------choosen-----------')
    //     console.log(currentAnswer);
    //     console.log('----------checker-----------')
    //     console.log(parseInt(currentAnswer) === data[currentQuestionIndex].answer)
    //     if (parseInt(currentAnswer) === data[currentQuestionIndex].answer) {
    //         console.log('Correct');
    //         setIsAnsweredCorrectly(1);
    //     } else {
    //         console.log('Incorrect');
    //         setIsAnsweredCorrectly(0);
    //     }
    // }, []);

    // useEffect(() => {   
    //     if (isAnsweredCorrectly) {
    //         // console.log('Correct');
    //         if (currentQuestionIndex < data.length - 1) {
    //             setCurrentQuestionIndex(currentQuestionIndex + 1);
    //         }
    //     } else {
    //         // console.log('Incorrect');
    //     }
    // }, []);

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
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [testAmount]);

    return (
        <>
            {loading ? 
                <PrimaryPageWrapper>
                    <PuffLoader 
                        color={colors.const_brand_name} /> 
                    <QuestionPicker 
                        size={2} 
                        onQuestionReady={(questions) => setQuestions(questions)}/>
                </PrimaryPageWrapper>
                : 
                <SecondaryPageWrapper>
                    {/* <div>Current Question: {currentQuestionIndex}</div> */}
                    {/* <div>Choosen Answer Index: {currentAnswer}</div> */}
                    <Question 
                        query={questions[currentQuestionIndex].question} />
                    <>
                        <MultipleChoicesAndImageWrapper>
                            <MultipleChoices 
                                options={questions[currentQuestionIndex].options}
                                correctAnswer={questions[currentQuestionIndex].answer} 
                                userChoice={currentAnswer}
                                currentQuestionIndex={currentQuestionIndex}
                                onChoiceClick={(index) => setCurrentAnswer(index)} 
                                onHandleChecker={(state) => setIsAnsweredCorrectly(state)}/>
                            <QuestionImage 
                                image={questions[currentQuestionIndex].image} />
                        </MultipleChoicesAndImageWrapper>
                        <QuestionHelperText 
                            comment={questions[currentQuestionIndex].comment} />
                        <NavigateQuestionButtons 
                            onQuestionClick={(index) => setCurrentQuestionIndex(index)}
                            isAnsweredCorrectly={isAnsweredCorrectly} />
                    </> 
                </SecondaryPageWrapper>
            }
        </>
        // <SecondaryPageWrapper>
        //     {/* <div>Current Question: {currentQuestionIndex}</div> */}
        //     {/* <div>Choosen Answer Index: {currentAnswer}</div> */}
        //     <Question 
        //         query={questions[currentQuestionIndex].question} />
        //     <>
        //         <MultipleChoicesAndImageWrapper>
        //             <MultipleChoices 
        //                 options={questions[currentQuestionIndex].options}
        //                 correctAnswer={questions[currentQuestionIndex].answer} 
        //                 userChoice={currentAnswer}
        //                 currentQuestionIndex={currentQuestionIndex}
        //                 onChoiceClick={(index) => setCurrentAnswer(index)} 
        //                 onHandleChecker={(state) => setIsAnsweredCorrectly(state)}/>
        //             <QuestionImage 
        //                 image={questions[currentQuestionIndex].image} />
        //         </MultipleChoicesAndImageWrapper>
        //         <QuestionHelperText 
        //             comment={questions[currentQuestionIndex].comment} />
        //         <NavigateQuestionButtons 
        //             onQuestionClick={(index) => setCurrentQuestionIndex(index)}
        //             isAnsweredCorrectly={isAnsweredCorrectly} />
        //         <QuestionPicker size={20}/>
        //     </> 
        // </SecondaryPageWrapper>
    );
}

export default AutoTestPage;
