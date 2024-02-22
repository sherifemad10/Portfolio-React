import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import NavBar from './companent/navbar';
import Banner from './companent/banner';
import Skills from './companent/skills';
import Projects from './companent/project';
import Contact from './companent/contact';
import Footer from './companent/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
