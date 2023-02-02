import React from 'react';
import colors from '../colors';

const MultipleChoices = ({ options, correctAnswer, onChoiceClick }) => {
    // const [isCorrect, setIsCorrect] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);

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
        } else {
            console.log('Incorrect');
        }
    }

    return (
        <div 
            className='col'>
            {Object.entries(options).map(([key, value]) => (
                <div 
                    onClick={() => onOptionClick(key)}
                    id={key}
                    // className={`cursor-pointer shadow-md hover:shadow-md transition ${true ? 'border-rose-600' : ''}`}
                    // className={`rounded-md cursor-pointer shadow-md hover:shadow-xl transition ${false ? 'border-green-600' : ''}`}
                    className={`rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition` 
                        + `${key === selectedOption ? (selectedOption === parseInt(correctAnswer) ? colors.query_br_Green : colors.query_br_Red) : ''}`}
                    style={{
                        fontSize: '16px',
                        color: colors.const_dark_text,
                        width: '100%',
                        marginTop: '20px',
                        padding: '10px 20px',
                        // border: `1px solid ${colors.const_dark_subtext}`, 
                        // border: `${true ? '1px solid' + colors.const_true_answer : ''}`, 
                        // borderRadius: '10px',
                    }}
                    key={key}>
                        {value}
                </div>
            ))}
        </div>
    );
}

export default MultipleChoices;
