import React from 'react';

const Question = ({ query }) => {
    return (
        <div>
            <div                   
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    border: '1px solid black',      
                }}>
                {query}
            </div>
        </div>
    );
}

export default Question;