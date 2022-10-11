import React from 'react';
import Option from '../Option/Option';

const Question = ({qs,index}) => {
    const {id,options,question,correctAnswer} =qs;
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-2xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <div className="p-8 bg-cyan-400 border rounded shadow-sm">
                
                <p className="inline-block mb-3 text-2xl font-bold text-black">
                    Quiz {index+1}: {question}
                </p>
                <p className="mb-5 text-white bg-gray grid grid-cols-2 gap-10">
                    {
                        options.map((option,index)=><Option
                            option={option}
                            key={index}
                        />)
                    }
                </p>
                
                </div>
                
            </div>
        </div>
    );
};

export default Question;