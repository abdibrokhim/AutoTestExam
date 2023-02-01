import React from 'react';

const MultipleChoices = ({ options }) => {
    return (
        <div className='col'>
            {Object.entries(options).map(([key, value]) => (
                <div 
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        border: '1px solid black',
                    }}
                    key={key}>
                        {value}
                </div>
            ))}
        </div>
    );
}

export default MultipleChoices;