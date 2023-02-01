import React from 'react';

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
                        padding: '10px 20px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    className='btn btn-primary'
                    key={i}
                    onClick={() => onQuestionClick(i)}>
                        {i + 1}
                </button>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
