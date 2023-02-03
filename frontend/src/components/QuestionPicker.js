import React from 'react';
import axios from 'axios';

const QuestionPicker = ({ size, onQuestionReady }) => {
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() => {
        console.log('Fetching questions...');
        axios.defaults.headers.post['Content-Type'] ='application/json; charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`/v1/api/question-list/size/${size}`)
            .then(res => {
                console.log(res.data);
                setQuestions(res.data);
                onQuestionReady(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <></>
    );
}

export default QuestionPicker;