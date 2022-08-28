import './App.css';
import Login from './Components/Login/Login'
import Loyaut from './Loyaut/Loyaut'
import Overview from './Wrapers/Overview/Overview';
function App() {
  return (
    <div className="App">
      <Loyaut>
        <Overview />
      </Loyaut>
    </div>
  );
}

export default App;
