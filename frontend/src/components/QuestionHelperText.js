import React from 'react';

const QuestionHelperText = ({ comment }) => {
    return (
        <div 
            className=''
            style={{
                textAlign: 'center',
                marginTop: '20px',
            }}>
            <div>{comment}</div>
        </div>
    );
}

export default QuestionHelperText;