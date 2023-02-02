import React from 'react';
import colors from '../colors';

const MultipleChoices = ({ options, onChoiceClick }) => {
    // const handleChoiceClick = (e) => {
    //     console.log(e.target.id);
    // }

    return (
        <div 
            className='col'>
            {Object.entries(options).map(([key, value]) => (
                <div 
                    onClick={() => onChoiceClick(key)}
                    id={key}
                    className='cursor-pointer shadow-md hover:shadow-md-bl transition'
                    style={{
                        fontSize: '16px',
                        color: colors.const_dark_text,
                        width: '100%',
                        marginTop: '20px',
                        padding: '10px 20px',
                        border: `1px solid ${colors.const_dark_subtext}`, 
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