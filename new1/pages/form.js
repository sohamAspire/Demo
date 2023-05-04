import React from "react";

const form = () => {
    const checkValidity = () =>{

    }
  return (
    <div className="h-screen flex items-center justify-center shadow-lg text-lg" >
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/5 ">
      <div class="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your Email"
          />
        
        </div>

        <div class="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default form;
