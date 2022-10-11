import React from 'react';

const Option = ({option,handleAns,correctAnswer}) => {
    return (
        <button onClick={()=>handleAns(option,correctAnswer)} className='flex items-center gap-2 border-2 border-green-500 bg-cyan-700 rounded-md p-2 hover:bg-cyan-900'>
            <input className='checked:bg-blue-500  indeterminate:bg-gray-300' type="radio" name='option' value={option}/>
            <h2>{option}</h2>
        </button>
    );
};

export default Option;