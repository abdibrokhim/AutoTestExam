import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import QuestionHelperText from '../components/QuestionHelperText';
import data from '../data';
import colors from '../colors';

const AutoTestPage = () => {
    // const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [currentAnswer, setCurrentAnswer] = useState('');

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedButton, setSelectedButton] = React.useState(null);

    const onOptionClick = (index) => {
        setSelectedOption(index);
        // onChoiceClick(index);
        // setSelectedButton(0);
    }

    const onNavigateButtonClick = (index) => {
        console.log(data)
        setSelectedButton(index);
        setCurrentQuestionIndex(index);
    }

    return (
        <>
        <div
            className=''>
            <div
                className="container-fluid px-3 mx-auto py-4"
                style={{
                    backgroundColor: colors.const_light_bg,
                    minHeight: '100vh',
                    fontSize: 'calc(10px + 2vmin)',
                    color: colors.const_dark_text,
                }}>
                <div>Current Question: {currentQuestionIndex}</div>
                <div>Choosen Answer Index: {selectedOption}</div>
                <div
                    className=''>
                    <div
                        className='cursor-pointer shadow-md hover:shadow-lg transition'
                        style={{
                            fontSize: '18px',
                            color: colors.const_dark_text,
                            marginTop: '20px',
                            padding: '10px 20px',
                        }}>
                        {data[currentQuestionIndex].question}
                    </div>
                </div>
                <div 
                    className=''>
                    <div 
                        className='row py-3 align-items-center'>
                        <div 
                            className='col-12 col-md-6'>
                            {Object.entries(data[currentQuestionIndex].options).map(([key, value]) => (
                                <div 
                                    onClick={() => onOptionClick(key)}
                                    id={key}
                                    className={`` 
                                        + `${key === selectedOption ? 
                                            (selectedOption ==! parseInt(data[currentQuestionIndex].answer) ? colors.query_br_Red : colors.query_br_Green) :
                                            'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition' 
                                    }`}
                                    style={{
                                        fontSize: '16px',
                                        color: colors.const_dark_text,
                                        width: '100%',
                                        marginTop: '20px',
                                        padding: '10px 20px',
                                    }}
                                    key={key}>
                                        {value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div 
                    className='col-12 col-md-6'>
                    <img 
                        style={{
                            width: '100%',
                            height: '400px',
                        }}
                        className=''
                        src={data[currentQuestionIndex].image} 
                        alt='autotest' />
                </div>
                <QuestionHelperText 
                    comment={data[currentQuestionIndex].comment} />
                <div 
                    className=''
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}>
                    {Array(20).fill().map((_, i) => (
                        <div 
                            onClick={() => onNavigateButtonClick(i)}
                            key={i} 
                            id={i}
                            className={`` 
                                + `${i === selectedButton ? 
                                    (selectedOption ==! parseInt(data[currentQuestionIndex].answer) ? 
                                    colors.query_br_Red : colors.query_br_Green) : 
                                    'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition'
                            }`}
                            style={{
                                fontSize: '14px',
                                padding: '10px 20px',
                                width: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default AutoTestPage;
