import React from 'react';
import colors from '../colors';

const NavigateQuestionButtons = ({ onQuestionClick, isAnsweredCorrectly }) => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [GreenOrRed, setGreenOrRed] = React.useState(null);

    const onOptionClick = (index) => {
        setSelectedOption(index);
        onQuestionClick(index);
    }

    React.useEffect(() => {
        if (isAnsweredCorrectly === true) {
            setGreenOrRed(true);
        } else if (isAnsweredCorrectly === false) {
            setGreenOrRed(false);
        } else {
            setGreenOrRed(null);
        }
    }, [isAnsweredCorrectly]);

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
                    onClick={() => onOptionClick(i)}
                    key={i} 
                    id={i}
                    className={`` 
                        + `${i === selectedOption ? 
                            (!GreenOrRed ? 
                            colors.query_br_Red : colors.query_br_Green) : 
                            'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition'
                    }`}
                    style={{
                        fontSize: '14px',
                        padding: '10px 20px',
                        width: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default NavigateQuestionButtons;
