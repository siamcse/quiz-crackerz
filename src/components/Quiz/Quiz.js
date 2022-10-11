import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {id,name,questions,total} = quiz;
    console.log(questions);
    const [quizAns, setQuizAns] = useState('');
    const handleAns = (option,correctAnswer)=>{
        console.log(option);
        console.log(correctAnswer);
        if(correctAnswer===option){
            alert('Correct ans')
        }
        else{
            <Alert severity="error">This is an error alert — check it out!</Alert>
        }
    }
    const handleShowAns = (id) =>{
        const selectQues = questions.find(q=>q.id===id);
        setQuizAns(selectQues.correctAnswer);    
    }
    return (
        <div>
            <h2 className='text-3xl text-blue-400'>Quiz of {name}</h2>
            {
                questions.map((qs,index)=> <Question
                    key={qs.id}
                    qs={qs}
                    index={index}
                    handleShowAns={handleShowAns}
                    quizAns={quizAns}
                    handleAns={handleAns}
                />)
            }
        </div>
    );
};

export default Quiz;