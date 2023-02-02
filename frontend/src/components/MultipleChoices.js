import React from 'react';
import colors from '../colors';

const MultipleChoices = ({ options, onChoiceClick, isAnsweredCorrectly }) => {
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
                    // className={`cursor-pointer shadow-md hover:shadow-md transition ${true ? 'border-rose-600' : ''}`}
                    // className={`rounded-md cursor-pointer shadow-md hover:shadow-xl transition ${false ? 'border-green-600' : ''}`}
                    className={`rounded-md outline-none cursor-pointer shadow-md hover:shadow-xl transition 
                        ${isAnsweredCorrectly === 1 ? 'border-green-600 shadow-green-600 shadow-md' : 
                        isAnsweredCorrectly === 0 ? 'border-rose-600 shadow-rose-600 shadow-md' : 
                        'bg-gray-500 text-slate-50 shadow-md hover:shadow-xl'}`}
                    style={{
                        fontSize: '16px',
                        color: colors.const_dark_text,
                        width: '100%',
                        marginTop: '20px',
                        padding: '10px 20px',
                        // border: `1px solid ${colors.const_dark_subtext}`, 
                        // border: `${true ? '1px solid' + colors.const_true_answer : ''}`, 
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