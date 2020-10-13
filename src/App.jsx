import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';

import Projects from './components/Projects';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className={loading ? 'hidden' : ''}>
      <Loader loading={loading} />
      <Header />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
