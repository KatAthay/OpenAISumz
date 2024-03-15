import React from "react";
import { logo } from "../assets";
import githubIcon from '../assets/github.svg';



const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button
          style={{ height: '40px', width: '120px' }} 
          type='button'
          onClick={() => window.open("https://github.com/KatAthay/OpenAI-Summarizer.git", "_blank")}
          className='font-semibold black_btn flex items-center gap-2 '
        >
          <img src={githubIcon} alt="GitHub" className='w-8 h-8 -ml-2' />
          Github
        </button>
        {/* <button
  type='button'
  onClick={() => window.open("https://github.com/KatAthay/OpenAI-Summarizer.git", "_blank")}
  className='font-semibold black_btn flex items-center gap-2 text-xl'
        >
          
  <img src={githubIcon} alt="GitHub" className='w-8 h-8' />
  Github
</button> */}
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
