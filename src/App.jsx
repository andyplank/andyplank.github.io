import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';

import Projects from './components/Projects';
import PreLoader from './components/PreLoader';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  return (
    <div className={loading ? 'hidden' : ''}>
      <PreLoader loading={loading} />
      <Header />
      <Landing />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
