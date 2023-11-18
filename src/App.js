 import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Textform from './components/Textform';




import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert,setAlert] =useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(()=>{
       setAlert(null)
    },1000)

  }

  const togglemode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark Mode has been enabled","sucess");
      document.title ='Textutils Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","sucess");
      document.title='Textutils Light mode';
    }
  }
  return (
    <>
    <Router>
        <Navbar mode={Mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<Textform showAlert={showAlert} heading="Enter the text to analyze below." mode={Mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
