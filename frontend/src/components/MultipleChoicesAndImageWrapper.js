import React from 'react';

const MultipleChoicesAndImageWrapper = ({ children }) => {
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

export default MultipleChoicesAndImageWrapper;