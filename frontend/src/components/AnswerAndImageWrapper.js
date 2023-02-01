import React from 'react';

const AnswerAndImageWrapper = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className='row pt-3'>
                {children}
            </div>
        </div>
    );
}

export default AnswerAndImageWrapper;