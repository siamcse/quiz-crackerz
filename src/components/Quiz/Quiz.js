import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {name,questions} = quiz;
    const handleAns = (option,correctAnswer)=>{

        if(correctAnswer===option){
            toast.success("Your answer is correct !");
        }
        else{
            toast.warning("Wrong Answer !");
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
                autoClose={1500}
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