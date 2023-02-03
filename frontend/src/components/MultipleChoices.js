import React from 'react';
import colors from '../colors';

const MultipleChoices = ({ options, correctAnswer, currentQuestionIndex, onChoiceClick, onHandleChecker }) => {
    // const [isCorrect, setIsCorrect] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);
    // const [isSelected, setIsSelected] = React.useState(false);

    const onOptionClick = (index) => {
        console.log('----------correctAnswer----------');
        console.log(correctAnswer);
        setSelectedOption(index);
        onChoiceClick(index);
    }

    onChoiceClick = (index) => {
        console.log('----------index----------');
        console.log(index);
        if (parseInt(index) === parseInt(correctAnswer)) {
            console.log('Correct');
            onHandleChecker(true);
        } else {
            console.log('Incorrect');
            onHandleChecker(false);
        }
    }

    return (
        <div 
            className='col-12 col-lg-6'>
            {Object.entries(options).map(([key, value]) => (
                <div 
                    onClick={() => onOptionClick(key)}
                    id={key}
                    className={`` 
                        + `${key === selectedOption ? 
                            (selectedOption ==! parseInt(correctAnswer) ? 
                            colors.query_br_Red : colors.query_br_Green) : 
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
    );
}

export default MultipleChoices;
