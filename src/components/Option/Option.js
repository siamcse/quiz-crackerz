import React from 'react';

const Option = ({option}) => {
    return (
        <button className='flex items-center gap-2 border-2 rounded-md p-2'>
            <input className='checked:bg-blue-500' type="radio" name='option'/>
            <h2>{option}</h2>
        </button>
    );
};

export default Option;