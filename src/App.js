import About from './About';
import './App.css';
import Video from './Video';
import Menu from './Menu';
import Price from './Price';
import Feedback from './Feedback';
import Information from './Information';
import End from './End'

function App() {
  return (
    <div>
      <Menu />
      <Video />
      <About/>
      <Price/>
      <Feedback />
      <Information/>
      <End />
    </div>
  );
}

export default App;
