import About from './About';
import './App.css';
import villa from './villa.png';
function App() {
  return (
    <div>
      <About/>
      <p>September 13</p>
      <img src={villa} alt="villa"/>

    </div>
  );
}

export default App;
