import React from 'react';

const QuestionImage = ({ image }) => {
    return (
        <div 
            className='col'
            style={{
                // textAlign: 'center',
            }}>
            <img 
                style={{
                    width: '100%',
                    height: '400px',
                }}
                className=''
                src={image} 
                alt='autotest' />
        </div>
    );
}

export default QuestionImage;