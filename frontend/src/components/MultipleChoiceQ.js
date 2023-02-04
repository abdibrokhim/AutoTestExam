import React from 'react';
import colors from '../colors';

const MultipleChoiceQ = ({ 
    options, 
    correctAnswer, 
    currentQuestionIndex, 
    onChoiceClick, 
    onHandleChecker, 
    onPassedQuestions,
}) => {

    // const [isCorrect, setIsCorrect] = React.useState('');
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [currentQuestionId, setCurrentQuestionId] = React.useState('');
    const [passedQueries, setPassedQueries] = React.useState([]);

    const onOptionClick = (index) => {
        console.log('----------currentQuestionId----------');
        console.log('currentQuestionId: ', currentQuestionId);
        console.log('----------correctAnswer----------');
        console.log('correctAnswer: ', correctAnswer);
        setSelectedOption(index);
        // onChoiceClick(selectedOption);
        console.log('----------index----------');
        console.log('index: ', index);
        if (parseInt(index) === parseInt(correctAnswer)) {
            console.log('Correct');
            onHandleChecker(true);
            if (!passedQueries.find(obj => obj.id === currentQuestionIndex)) {
                setPassedQueries([...passedQueries, 
                    {id: currentQuestionIndex, isCorrect: true}
                ]);
                    
                console.log('----------passedQueries----------');
                console.log('passedQueries: ', passedQueries);
            }
        } else {
            console.log('Incorrect');
            onHandleChecker(false);
            if (!passedQueries.find(obj => obj.id === currentQuestionIndex)) {
                setPassedQueries([...passedQueries, 
                    {id: currentQuestionIndex, isCorrect: false}
                ]);
                    
                console.log('----------passedQueries----------');
                console.log('passedQueries: ', passedQueries);
            }
        }

        setCurrentQuestionId(parseInt(currentQuestionIndex));
    }

    React.useEffect(() => {
        onPassedQuestions(passedQueries);
    }, [passedQueries]);

    React.useEffect(() => {
        onChoiceClick(selectedOption);
    }, [selectedOption, onChoiceClick]);

    onChoiceClick = (index) => {
        console.log('----------index----------');
        console.log('index: ', index);
        if (parseInt(index) === parseInt(correctAnswer)) {
            console.log('Correct');
            onHandleChecker(true);
            if (!passedQueries.find(obj => obj.id === currentQuestionIndex)) {
                setPassedQueries([...passedQueries, 
                    {id: currentQuestionIndex, isCorrect: true}
                ]);
                    
                console.log('----------passedQueries----------');
                console.log('passedQueries: ', passedQueries);
            }
            return true;
        } else {
            console.log('Incorrect');
            onHandleChecker(false);
            if (!passedQueries.find(obj => obj.id === currentQuestionIndex)) {
                setPassedQueries([...passedQueries, 
                    {id: currentQuestionIndex, isCorrect: false}
                ]);
                    
                console.log('----------passedQueries----------');
                console.log('passedQueries: ', passedQueries);
            }
            return false;
        }
    }

    return (
        <div 
            className='col-12 col-lg-6'>
            {Object.entries(options).map(([key, value]) => (
                <button 
                    disabled={passedQueries.includes(parseInt(currentQuestionIndex))}
                    data-bs-toggle
                    onClick={() => onOptionClick(key)}
                    id={key}
                    className={`` 
                        + `${key === selectedOption ? 
                            (passedQueries.find(obj => obj.id === currentQuestionIndex) ? 
                            (onChoiceClick(key) ? colors.query_br_Green : colors.query_br_Red) : 
                            'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition text-start') : 'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition text-start'
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
                </button>
            ))}
        </div>
    );
}

export default MultipleChoiceQ;
