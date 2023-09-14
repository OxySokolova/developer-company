import './App.css';
import villa from './villa.png';
function App() {
  return (
    <div>
      <p>September 13</p>
      <p>Hello, it is me!!!</p>
      <img src={villa} alt="villa"/>
      <button className='btn'>Book a villa</button>
    </div>
  );
}

export default App;
