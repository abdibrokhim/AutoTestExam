import React from 'react';
import colors from '../colors';

const Question = ({ query }) => {
    return (
        <div>
            <div
                className='cursor-pointer shadow-md hover:shadow-md-bl transition'               
                style={{
                    fontSize: '18px',
                    color: colors.const_dark_text,
                    marginTop: '20px',
                    padding: '10px 20px',
                    border: `1px solid ${colors.const_dark_subtext}`,    
                    // borderRadius: '10px',
                }}>
                {query}
            </div>
        </div>
    );
}

export default Question;