import React from 'react';

const CheckCorrectAnswer = ({ answer, correctAnswer }) => {
    const bgRed = 'bg-rose-600 text-slate-50 shadow-rose-600 shadow-md';
    const bgGreen = 'bg-green-600 text-slate-50 shadow-green-600 shadow-md';

    const brRed = 'border-green-600 shadow-green-600 shadow-md';
    const brGreen = 'border-rose-600 shadow-rose-600 shadow-md';

    if (parseInt(answer) === correctAnswer) {
        return (
            <></>
        );
    } else {
        return (
            <></>
        );
    }
}

export default CheckCorrectAnswer;