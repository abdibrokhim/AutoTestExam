import React from 'react';
// import colors from '../colors';

const NavigateQuestionButtons = ({ onQuestionClick, isAnsweredCorrectly }) => {
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
                    style={{
                        fontSize: '14px',
                        padding: '10px 20px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        // border: `1px solid ${colors.const_dark_subtext}`, 
                        // backgroundColor: `${isAnsweredCorrectly ? colors.const_false_answer : ''}`,
                        // color: `${isAnsweredCorrectly ? colors.const_light_text : ''}`,
                    }}
                    // className='rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition'
                    className='rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition'
                    key={i}
                    id={i}
                    onClick={() => onQuestionClick(i)}>
                        {i + 1}
                </div>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
