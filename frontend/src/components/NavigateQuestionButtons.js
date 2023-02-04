import React from 'react';
import colors from '../colors';
import NavigateButtonContext from '../pages/AutoTestPageWithContext'

const NavigateQuestionButtons = ({ 
    onQuestionClick, 
    isAnsweredCorrectly, 
    passedQueriesArray,
}) => {

    const value = React.useContext(NavigateButtonContext);
    console.log('value: ', value);

    const [selectedOption, setSelectedOption] = React.useState('');
    const [passedQueries, setPassedQueries] = React.useState([]);
    // const [GreenOrRed, setGreenOrRed] = React.useState(null);

    const onOptionClick = (index) => {
        setSelectedOption(index);
        onQuestionClick(index);
        setPassedQueries([...passedQueries, passedQueriesArray]);
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
                <button 
                    onClick={() => onOptionClick(i)}
                    key={i} 
                    id={i}
                    className={`` 
                        + `${i === selectedOption ? 
                            (isAnsweredCorrectly !== '' ?
                            (!isAnsweredCorrectly ? colors.query_br_Red : colors.query_br_Green) : 
                            'rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition') :
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
