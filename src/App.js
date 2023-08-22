import logo from './logo.svg';
import './App.css';

import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode,setdarkMode]=React.useState(false)
    
    function toggle(){
        setdarkMode(prevdarkMode => {
            return !prevdarkMode
        })
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggle}/>
            <Main darkMode={darkMode} />
        </div>
    )
}