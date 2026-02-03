import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
    const isHome = window.location.pathname === '/';
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');

    if (isBot) {
      setStarted(true);
    } else if (isHome && !alreadyVisited) {
      setStarted(false);
    } else {
      setStarted(true);
    }
    setInitialCheckDone(true);
  }, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      <Helmet>
        <title>Dhiraj Mistry | Full Stack Developer</title>
        <meta
          name="description"
          content="Dhiraj Mistry's portfolio - Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore projects, skills, and experience."
        />
      </Helmet>

      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
      
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
