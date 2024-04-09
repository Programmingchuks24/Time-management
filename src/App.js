import './App.css';
import Login from './Login';
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import Signup from './Signup';
import Category from './Category';
import ForgotPassword from './ForgotPassword';

function App() {
  return (

    <Router>

      <div>


      
        <Routes>

          
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/category" element = {<Category/>}/>
          <Route path = "/forgot" element = {<ForgotPassword/>}/>
          
          
        </Routes>

      </div>
  
    </Router>
    
  );
}

export default App;
