import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Containers/Home/Home'
import Admin from './Containers/Admin/admin'
import Login from "./Containers/User/Login/Login"
import Register from "./Containers/User/Register/Register"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
