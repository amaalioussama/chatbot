"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {useRouter} from "next/navigation";
import { toast } from "react-hot-toast";

import backraound from '../../../public/backforms.png';
import Logo from '../../../public/logo.png';

const SignupPage = () => {

   const router = useRouter()


 const [username ,setUsername] =useState()
 const [email ,setEmail] =useState()
 const [password ,setPassword] =useState()
 const handleSubmit = (e) => {
  e.preventDefault()
  const response =  axios({
    method: 'post',
    baseURL: 'http://localhost:3001',
    url: '/register',
    data: {
      username,
      email,
      password
    }
  })
    .then(result =>{console.log(result)
      router.push("../login");})
    .catch(err => console.log(err))
}
  return (
    <div className="bg-gradient-to-b from-red-950 to-transparent h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <Image src={backraound} className='w-auto h-auto' alt="Background Image" />
      </div>

      <div className="absolute top-8 left-8 z-10">
        <Image src={Logo} width={40} height={40} alt="Logo" />
      </div>

      <main className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-4xl mb-4 font-poppins font-semibold"> Sign up </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                 onChange={ (e) =>setUsername(e.target.value) }
                className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={ (e) =>setEmail(e.target.value) }
                className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={ (e) =>setPassword(e.target.value) }
                className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base"
              />
            </div>
            <button
              type="submit"
              // disabled={buttonDisabled}
              className="bg-black relative inline-flex w-48 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group"
            >
              <span className="relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800">
              SIGN UP  {/* {loading ? "Loading..." : "SIGN UP"} */}
              </span>
            </button>
          </form>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <button className="px-5 py-2 inline-flex items-center justify-center border gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>SIGN UP with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};  
export default SignupPage;
