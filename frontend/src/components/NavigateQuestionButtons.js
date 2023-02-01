import React from 'react';

const NavigateQuestionButtons = ({ onQuestionClick }) => {
    return (
        <div>
            {Array(20).fill().map((_, i) => (
                <button 
                    key={i}
                    onClick={() => onQuestionClick(i)}>
                        {i + 1}
                </button>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
