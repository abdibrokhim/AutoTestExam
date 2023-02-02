import React from 'react';

const MultipleChoicesAndImageWrapper = ({ children }) => {
    return (
        <div 
            className=''>
            <div 
                className='row py-3 align-items-center'>
                {children}
            </div>
        </div>
    );
}

export default MultipleChoicesAndImageWrapper;