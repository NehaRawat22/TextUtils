//import logo from "./logo.svg";
import React ,{useState} from 'react';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//*import{
// BrowserRouter as Router,
// Routes,
// Route,}
// from 'react-router-dom';


function App() {
  const[mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add("bg-"+cls);
    if(cls === 'secondary'){   
      setMode('white')                
      showAlert(" Dark mode has been enabled!","success");
    }
    else if(cls=== 'light'){
      setMode('light') 
      showAlert(" Light mode has been enabled!","success");
    }
    else{
      setMode('light');
    }
  }
  return (
    //<Router>
    <div>
      <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/*<Navbar/>*/}
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Text Analyzer" mode={mode}/>
      <About mode={mode}/>
        {/*<Routes>
          <Route path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Try TextUtils Here" mode={mode}/>}></Route>
          <Route path="/about" element={<About mode={mode}/>}></Route>
        </Routes>*/}
      </div>
      </>
    </div>
    //</Router>
  );
}

export default App;
