import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar  from "./components/PrimarySearchAppBar"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <PrimarySearchAppBar/>
     <div className="pb-20">
     <Footer/> 
     </div>
 
    </div>
  );
}

export default App;
