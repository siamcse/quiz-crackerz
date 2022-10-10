import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {id,name,questions,total} = quiz;
    console.log(quiz);
    return (
        <div>
            <h2 className='text-2xl'>Quiz of {name}</h2>
            {
                questions.map((qs,index)=> <Question
                    key={qs.id}
                    qs={qs}
                    index={index}
                />)
            }
        </div>
    );
};

export default Quiz;