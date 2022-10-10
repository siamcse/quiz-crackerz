import React from 'react';

const Topic = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div>
            <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src={logo}
                        className="object-cover w-full h-72"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-2 text-gray-700">
                        Sed ut perspiciatis unde omnis iste natus error sit sed quia
                        consequuntur magni voluptatem doloremque.
                        </p>
                        <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                        Learn more
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Topic;