
import './App.css';
import Navigation from './routes/Navigation';
import Hero from './components/hero.component';
import Card from './components/card.component';
import Homepage from './routes/Homepage';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Homepage/>
    </div>
  );
}

export default App;
