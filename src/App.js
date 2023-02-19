import './App.css';
import Contact from './components/Contact';
import CopyRight from './components/CopyRight';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Growth from './components/Growth';
import MiddlePart from './components/MiddlePart';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <MiddlePart />
      <Growth />
      <Contact />
      <Faq />
      <Footer />
      <CopyRight/>
    </>
  );
}

export default App;
