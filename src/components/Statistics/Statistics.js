import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <h2 className='text-3xl text-blue-400 '>Quiz Statistics</h2>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <LineChart width={500} height={300} data={topics}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name"/>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;