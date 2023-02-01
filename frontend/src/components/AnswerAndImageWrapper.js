import React from 'react';

const AnswerAndImageWrapper = ({ children }) => {
    return (
        <div 
            className=''>
            <div 
                className='row pt-3 align-items-center'>
                {children}
            </div>
        </div>
    );
}

export default AnswerAndImageWrapper;