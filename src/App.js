import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [toggleTheme, setToggleTheme] = useState("dark")
  const [alert, setAlert] = useState(null)
  const showAlert=(type,message)=>{
    setAlert({
      message:message,
      type:type
    })
    
  setTimeout(() => {
    setAlert(null)
  }, 1500);
  }

  const toggleThemeFunction=()=>{
    if (toggleTheme==="dark") {
      document.body.style.backgroundColor ="grey"
      setToggleTheme("light")
      showAlert("success","Dark Mode Has Been Enabled")
    } else {
      setToggleTheme("dark")
      document.body.style.backgroundColor = "#85B0BE"
      showAlert("success", "Light Mode Has Been Enabled")
    }
  }
  return (
    <>
    <Router>

        <Navbar title="TextUtils" toggleChecker={toggleTheme} func={toggleThemeFunction} />
        <Alert alert={alert} />
        <div >
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" toggleChecker={toggleTheme} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}
export default App;
