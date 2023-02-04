import React from 'react';
import colors from '../colors';

const MultipleChoices = ({ 
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
        console.log(currentQuestionId);
        console.log('----------correctAnswer----------');
        console.log(correctAnswer);

        setSelectedOption(index);
        onChoiceClick(index);
        setCurrentQuestionId(parseInt(currentQuestionIndex));
        if (!passedQueries.includes(parseInt(currentQuestionIndex))) {
            setPassedQueries([...passedQueries, currentQuestionIndex]);
            console.log('----------passedQueries----------');
            console.log(passedQueries);
        }
        console.log(passedQueries);
    }

    React.useEffect(() => {
        onPassedQuestions(passedQueries);
    }, [passedQueries]);


    onChoiceClick = (index) => {
        console.log('----------index----------');
        console.log(index);
        if (parseInt(index) === parseInt(correctAnswer)) {
            console.log('Correct');
            onHandleChecker(true);
            return true;
        } else {
            console.log('Incorrect');
            onHandleChecker(false);
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
                            (passedQueries.includes(currentQuestionIndex) ? 
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

export default MultipleChoices;
