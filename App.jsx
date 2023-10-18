import React from 'react';
import Navbar from './Navbar';
import Card from './Cards';
import Searchb from './Searchbar';
import Bollywood from './Bollywood';
import Anime from './Anime';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/"/>
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Anime" element={<Anime />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
    <br/><br/>
        <Searchb />
        <Card 
          imgsrc="https://wallpapers.com/images/high/dark-netflix-c3l0u5drhrmdncpg.webp"
          Catg="A Netflix Series"
          sname="Dark"
          link="https://www.netflix.com/in/title/80100172"
        />
        </>
  );
};

export default App;
