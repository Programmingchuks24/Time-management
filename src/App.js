import './App.css';
import Login from './Login';
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (

    <Router>

      <div>


      
        <Routes>

          
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>

          
          
        </Routes>

      </div>
  
    </Router>
    
  );
}

export default App;
