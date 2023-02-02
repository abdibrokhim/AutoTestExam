import React from 'react';
import colors from '../colors';

const NavigateQuestionButtons = ({ onQuestionClick }) => {
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
                <button 
                    style={{
                        fontSize: '14px',
                        padding: '10px 20px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        border: `1px solid ${colors.const_dark_subtext}`, 
                    }}
                    className='btn cursor-pointer shadow-md hover:shadow-md-bl transition'
                    key={i}
                    onClick={() => onQuestionClick(i)}>
                        {i + 1}
                </button>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
