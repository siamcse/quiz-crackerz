import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Option from '../Option/Option';
import { Alert } from '@mui/material';

const Question = ({qs,index,handleShowAns,handleAns}) => {
    const {id,options,question,correctAnswer} =qs;
    const [show, setShow] = useState(false);
    const handleAnsView = ()=>{
        setShow(current=>!current);
    }
    
    return (
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-3xl md:px-24 lg:px-8 lg:py-10">
            <div>
                <div className="p-8 border rounded shadow-sm">
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start md:gap-6'>
                    <p className="inline-block mb-3 text-2xl font-bold text-black">
                    Quiz {index+1}: {question.slice(3,-4)}
                    </p>
                    <button onClick={()=>handleShowAns(id)} className=''>
                        <FontAwesomeIcon onClick={handleAnsView} className={show?'hidden':''} icon={faEye}/>
                        <FontAwesomeIcon onClick={handleAnsView} className={show?'':'hidden'} icon={faEyeSlash}/>
                    </button>
                </div>
                
                <p className="mb-5 text-white bg-gray grid md:grid-cols-2 gap-10">
                    {
                        options.map((option,index)=><Option
                            option={option}
                            key={index}
                            handleAns={handleAns}
                            correctAnswer={correctAnswer}
                        />)
                    }
                    
                </p>
                <div className={show ? '' : 'hidden'}>
                    <Alert
                        color="success"
                        onDismiss={function onDismiss() { handleAnsView() }}>
                        <span>
                            <span className="font-medium">
                                Correct Answer :
                            </span>
                            {' '}{correctAnswer}
                        </span>
                    </Alert>
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Question;