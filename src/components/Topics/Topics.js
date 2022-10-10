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
            {
                topics.map(topic=> <Topic 
                    key={topic.id}
                    topic={topic}
                />)
            }
        </div>
    );
};

export default Topics;