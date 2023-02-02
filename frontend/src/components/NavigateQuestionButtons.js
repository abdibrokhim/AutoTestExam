import React from 'react';
import colors from '../colors';

const NavigateQuestionButtons = ({ onQuestionClick, isAnsweredCorrectly }) => {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const onOptionClick = (index) => {
        // console.log('----------correctAnswer----------');
        // console.log(correctAnswer);
        setSelectedOption(index);
        onQuestionClick(index);
    }

    return (
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
                    onClick={() => onOptionClick(i)}
                    key={i} 
                    id={i}
                    // className={`` 
                    //     + `${i === selectedOption ? 
                    //         (selectedOption ==! parseInt(correctAnswer) ? 
                    //         colors.query_br_Red : colors.query_br_Green) : 
                    //         'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition'
                    // }`}
                    style={{
                        fontSize: '14px',
                        padding: '10px 20px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        // border: `1px solid ${colors.const_dark_subtext}`, 
                        // backgroundColor: `${isAnsweredCorrectly ? colors.const_false_answer : ''}`,
                        // color: `${isAnsweredCorrectly ? colors.const_light_text : ''}`,
                    }}>
                    {i + 1}
                </div>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
