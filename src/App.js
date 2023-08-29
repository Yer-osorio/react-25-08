// import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import SobreMi from './Components/SobreMi';
import Guitarra from './Components/Guitarra';
import DenseAppBar from './Components/DenseAppBar';
import StandardImageList from './Components/StandardImageList';

function App() {
  return (
    <div className="App">
      <DenseAppBar/>
      <SobreMi/>
      <Guitarra/>
      <StandardImageList/>
      <Menu/>
      <Home/>
    </div>
  );
}

export default App;
//

