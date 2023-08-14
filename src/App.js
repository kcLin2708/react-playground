import React, { useState, useRef } from 'react';
import Header from './components/Header/Header.js';
import News from './components/News/News.js';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <News />
      </main>
    </>
  );
}
