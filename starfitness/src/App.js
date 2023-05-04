import logo from './logo.svg';
import './App.css';
import AllRouts from './App Routs/All Routs/AllRouts';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <div>

        <NavigationBar/>
        <AllRouts/>

      </div>
    </div>
  );
}

export default App;
