import React from 'react';

const Signup = () => {
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4">
        <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600" placeholder="Enter your name" />
        </div>
        <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600" placeholder="Enter your email" />
        </div>
        <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" className="w-full p-2 rounded bg-gray-700 border border-gray-600" placeholder="Enter your password" />
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold">Sign Up</button>
        </form>
    </div>
    </div>
);
};

export default Signup;