import React from 'react';

// import component

import Banner from './components/Banner'
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Banner/>
      <Testimonials />
      <Skills/>
      <Team/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  )


};

export default App;
