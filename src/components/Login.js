"use client";
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const profile = {
      displayName: username,
      pictureUrl: 'https://www.w3schools.com/w3images/avatar2.png',
    };
    onLogin(profile);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560003451-a35453de8953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')" }}>
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="/Line_Logo_PNG1.png" width="150" alt="LINE Logo" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text" name="username" placeholder="Email or Phone Number" onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
