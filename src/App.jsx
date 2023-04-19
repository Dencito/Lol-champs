import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Home from './pages/Home'
import Single from './pages/Single'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/champion/:name" element={<Single/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
