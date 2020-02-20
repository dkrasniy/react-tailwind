import React from 'react';
import logo from './logo.svg';
import { ChevronLeft } from 'react-feather';
import {
  Link,
} from 'react-router-dom';

function About() {
  return (
    <div className="App bg-gray-800 text-center min-h-screen items-center flex justify-around">
      <div>
        <img src={logo} className="w-64 mx-auto" alt="logo" />
        <p className="text-white text-semibold text-lg">
          About David &amp; Louis
        </p>
        <Link className="text-gray-500 block" to="/"><ChevronLeft width={18} className="inline"/> Go back home</Link>
        </div>
    </div>
  );
}

export default About;
