
import './App.css';
import Navbar from './components/navbar';
import Hero1 from './components/heroone'
import Hero2 from './components/herotwo'
import Hero3 from './components/herothree'
import Hero4 from './components/herofour'



function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Hero1></Hero1>
     <Hero2></Hero2>
     <Hero3></Hero3>
     <Hero4></Hero4>
    </div>
  );
}

export default App;
