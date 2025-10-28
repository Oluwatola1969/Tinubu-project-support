
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Structure from './components/Structure';
import Team from './components/Team';
import Activities from './components/Activities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Structure />
        <Team />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default App;
