import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Home from './components/Home';
import Singleproducts from './components/Singleproducts';
import Allroutes from './components/Allroutes';
import Productspage from './components/Productspage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Allroutes/>
     {/* <Login/> */}
    </div>
  );
}

export default App;
