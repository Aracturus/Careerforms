import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
// import Careerpage from './Components/Careerpage'
import CareerpageTwo from './Components/CareerpageTwo'
// import ByTheNumber from './Components/ByTheNumber'
// import CareerpageLN from './Components/CareerpageLN'
import Forms from './Components/Forms'; 
function App() {
  return (
    <div className="App">
    <NavBar/>
    {/* <Careerpage/> */}
    <CareerpageTwo/>
    <Forms/>
    </div>
  );
}

export default App;
