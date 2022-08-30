import './App.css';
import Login from './Components/Login/Login'
import Loyaut from './Loyaut/Loyaut'
import Overview from './Wrapers/Overview/Overview';
import Transictions from './Wrapers/Transictions/Transictions'
import Exchange from './Wrapers/Exchange/Exchange'
import Market from './Wrapers/Market/Market.jsx'

function App() {
  return (
    <div className="App">
      <Loyaut>
        {/* <Transictions/> */}
        {/* <Overview /> */}
        {/* <Exchange /> */}
        <Market/>
      </Loyaut>
    </div>
  );
}

export default App;
