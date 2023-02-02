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
                    className={`rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition 
                        ${isAnsweredCorrectly === 1 ? 'bg-green-600 text-slate-50 shadow-green-600 shadow-md' : 
                        isAnsweredCorrectly === 0 ? 'bg-rose-600 text-slate-50 shadow-rose-600 shadow-md' : 
                        'bg-gray-500 text-slate-50 shadow-md hover:shadow-xl'}`}
                    key={i}
                    onClick={() => onQuestionClick(i)}>
                        {i + 1}
                </div>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
