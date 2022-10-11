import React from 'react';

const Header = () => {
    return (
        <div className='relative'>
          <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-64"
        alt=""
      />
          <div className='relative bg-gray-700 bg-opacity-75'>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Learn</span>
          </span>{' '}
          faster. Stay motivated. Study smarter.
        </h2>
        <p className="text-base text-white md:text-lg">
          Practice makes a man perfect is a proverb which tells us the importance of continuous practice in any subject to learn anything. There is no alternate to the hard work and success. We must have to practice in the particular field on regular basis in which we want to succeed.
        </p>
      </div>
    </div>
          </div>
        </div>
    );
};

export default Header;