import React from 'react';
import './index.css';
import TopBanner from './components/TopBanner'
import SecondSection from './components/SecondSection';
import Sponsors from './components/Sponsors';
import TextArea from './components/TextArea';
import Resorts from './components/Resorts';
import Cards from './components/Cards';
import Passes from './components/Passes';
import BottomLinks from './components/BottomLinks';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <TopBanner />
        <SecondSection />
        <Sponsors />
        <TextArea />
        <Resorts />
        <Cards />
        <Passes />
        <BottomLinks /> 
        <Footer />
        
      
    </div>
  );
}

export default App;
