import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <Header></Header>
            <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        topics.map(topic=> <Topic 
                            key={topic.id}
                            topic={topic}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;