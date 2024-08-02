import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plan from './components/Plans/Plan';
import Pratice from './components/Pratice/Pratice';
import Program from './components/Program/Program';
import Reasons from './components/Reason/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plan/>
          <Testimonials/>
          <Join/>
          <Footer/>
          
    </div>
  );
}

export default App;
