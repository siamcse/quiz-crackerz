import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div>
            <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm border">
                    <img
                        src={logo}
                        className="object-cover w-full h-72 p-2 rounded"
                        alt=""
                    />
                    <div className="p-5 flex justify-between items-center border border-t-0">
                        <p className="text-xl">
                        {name}
                        </p>
                        <Link
                        to={`/topic/${id}`}
                        aria-label=""
                        className="font-semibold flex items-center gap-3 bg-cyan-600 p-2 rounded-md duration-200 text-white hover:bg-cyan-800"
                        >
                        <p>Start Practice</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Topic;