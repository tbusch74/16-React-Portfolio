import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Project from './Components/Project';

function App() {
  const [categories] = useState([
    {
      name:'aboutMe',
      displayName: 'About Me'
    },
    {
      name:'portfolio',
      displayName: 'Portfolio'
    },
    {
      name:'contact',
      displayName: 'Contact Me'
    },
    {
      name:'resume',
      displayName: 'My Resume'
    }
  ]);

  const[currentCategory,setCurrentCategory] = useState(categories[0])

  return (
    <>
    <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Header>
    <Project currentCategory={currentCategory}></Project>
    <Footer></Footer>
    </>
  );
}

export default App;
