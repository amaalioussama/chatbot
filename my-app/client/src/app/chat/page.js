'use client'

import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Logochat from '../../../public/chat.png';
import axios from "axios";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Page = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: 'assistant', content: userInput }],
      model: 'gpt-3.5-turbo',
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'assistant', content: chatCompletion.choices[0].message.content },
    ]);

    setUserInput('');
    setIsLoading(false);
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatHistory]);

  const handleSubmit =(e)=>{
    axios({
      method:"post",
      baseURL :"http::/localhost:3001",
      url:"/savechat",
      data :{
        userInput,
        chatHistory,
      },
    } )
  }
  return (
    <div className="flex justify-between min-h-screen bg-gradient-to-b from-black to-red-950 relative">

      <div className="bg-black p-4">
        <div className="flex">
          <div className="absolute top-8 left-8 z-10">
            <Image src={Logo} width={40} height={40}  alt="Logo" />
          </div>
          <a href="#" className="text-white text-lg font-semibold mt-5">New chat</a>
          <Image src={Logochat} className="ml-3 mt-6"  width={40} height={40}  alt="Logochat" />
        </div>

        <div className="mt-7 ml-4">
          <h1 className="text-gray-600 font-serif text-sm font-semibold">Previous 7 days</h1>
        </div>
        <div className="mt-40 ml-4">
          <h1 className="text-gray-600 font-serif text-sm font-semibold">Previous 30 days</h1>
        </div>
        <div className="ml-4 fixed bottom-0 text-gray-600 font-serif text-sm font-semibold">
          User:
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-red-950 relative flex-1">
        <div id="chat-container" className="max-w-full p-4 fixed bottom-0 overflow-y-auto h-96">
          <div className="">
            <div className="mb-4">
              {chatHistory.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-transparent text-white' : 'bg-transparent'}`}>
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 bg-black">
          <div className="flex items-center ">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base flex-1 mr-4 "
            />
            <button
              onClick={handleUserInput}
              disabled={isLoading}
              className="bg-transparent relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-medium text-white rounded-lg group"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-black">
                {isLoading ? 'Loading...' : 'Send'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;