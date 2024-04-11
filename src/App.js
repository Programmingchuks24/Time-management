import './App.css';
import Login from './Login';
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom';
import Signup from './Signup';
import Category from './Category';
import ForgotPassword from './ForgotPassword';
import { AnimatePresence } from 'framer-motion';
import Reminder from "./Reminder";

function App() {
  return (

    <Router>

      <div>

        <AnimatePresence mode='wait'>
        <Routes>

          
          <Route path = "/" element = {<Login/>} keys = "/"/>
          <Route path = "/signup" element = {<Signup/>} keys = "/signup"/>
          <Route path = "/category" element = {<Category/>} keys = "/category"/>
          <Route path = "/forgot" element = {<ForgotPassword/>} keys = "/forgot"/>
          <Route path = "/reminder" element = {<Reminder/>} keys = "/reminder"/>
        </Routes>

        </AnimatePresence>

      </div>
  
    </Router>
    
  );
}

export default App;
