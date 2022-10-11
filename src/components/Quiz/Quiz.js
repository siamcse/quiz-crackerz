import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {id,name,questions} = quiz;
    const handleAns = (option,correctAnswer)=>{

        if(correctAnswer===option){
            toast("Your answer is correct !");
        }
        else{
            toast("Wrong Answer !");
        }
    }

    return (
        <div>
            <h2 className='text-3xl text-blue-400'>Quiz of {name}</h2>
            {
                questions.map((qs,index)=> <Question
                    key={qs.id}
                    qs={qs}
                    index={index}
                    handleAns={handleAns}
                />)
            }
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Quiz;