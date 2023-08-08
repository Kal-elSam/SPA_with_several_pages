"use client";
import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

function Home() {
  const [profile, setProfile] = useState(null);

  const handleLogin = (userProfile) => {
    setProfile(userProfile);
  };

  return (
    <div>
      {profile ? (
        <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
          <div className="flex justify-center items-end text-center min-h-screen sm:block">
            <div className="bg-gray-500 transition-opacity bg-opacity-75"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
            <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform
              shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
                <div className="grid grid-cols-1">
                  <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                    <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                      <img
                        src={profile.pictureUrl}
                        alt="User profile"
                        className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                      />
                      <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">{profile.displayName}</p>
                      <p className="mt-3 text-base leading-relaxed text-center text-gray-200">Información adicional del usuario aquí</p>
                      <div className="w-full mt-6">
                        <Link to="/map" className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
  font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ver Ubicación</Link>
                        <Link to="/additional" className="block mt-3 text-base text-white underline hover:text-indigo-500 transition duration-300">Addition</Link>
                        <Link to="/error/401" className="block mt-2 text-sm text-gray-400 hover:text-indigo-500 transition duration-300">Error 401</Link>
  <Link to="/error/403" className="block mt-2 text-sm text-gray-400 hover:text-indigo-500 transition duration-300">Error 403</Link>
  <Link to="/error/404" className="block mt-2 text-sm text-gray-400 hover:text-indigo-500 transition duration-300">Error 404</Link>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Home;
