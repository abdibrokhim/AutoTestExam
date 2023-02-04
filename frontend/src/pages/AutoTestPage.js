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
import MultipleChoiceQ from '../components/MultipleChoiceQ';
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
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState('');
    // const [buttonId, setButtonId] = useState('');
    const [loading, setLoading] = useState(true);
    const [passedQueries, setPassedQueries] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
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
                        query={questions[currentQuestionIndex].question} 
                    />
                    <>
                        <MultipleChoicesAndImageWrapper>
                            <MultipleChoices 
                                options={questions[currentQuestionIndex].options}
                                correctAnswer={questions[currentQuestionIndex].answer} 
                                userChoice={currentAnswer}
                                currentQuestionIndex={currentQuestionIndex}
                                onChoiceClick={(index) => setCurrentAnswer(index)} 
                                onHandleChecker={(state) => setIsAnsweredCorrectly(state)} 
                                // onPassedQuestions={(queries) => setPassedQueries(...passedQueries, queries)} 
                            />
                            <QuestionImage 
                                image={questions[currentQuestionIndex].image} 
                            />
                        </MultipleChoicesAndImageWrapper>
                        <QuestionHelperText 
                            comment={questions[currentQuestionIndex].comment} 
                        />
                        <NavigateQuestionButtons 
                            onQuestionClick={(index) => setCurrentQuestionIndex(index)}
                            isAnsweredCorrectly={isAnsweredCorrectly} 
                            // passedQueriesArray={passedQueries}
                        />
                    </> 
                </SecondaryPageWrapper>
            }
        </>
    );
}

export default AutoTestPage;
