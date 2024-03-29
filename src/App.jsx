import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Containers/Home/Home'
import Admin from './Containers/Admin/Admin'
import Login from "./Containers/User/Login/Login"
import Register from "./Containers/User/Register/Register"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Male from "./Containers/Male/Male"
import Ftitulo from "./Containers/Ftitulo/Ftitulo"
import Profile from "./Containers/Profile/Profile"
import Purchase from "./Containers/Purchase/Purchase"
import Invoice from "./Containers/Invoice/Invoice"
import Settings from "./Containers/Settings/Settings"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/male" element={<Male/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="/ftitulo" element={<Ftitulo/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/purchase" element={<Purchase/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
