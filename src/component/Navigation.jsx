import React from 'react'
import logo from './912communication.png'
import { useNavigate , useLocation } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate();

const location = useLocation();

    const goToRSP =()=>{
        navigate("/")
    }

    const goToToDo = () => {
    navigate("/todo");
  }

    
  return (
    <div>
        <div className='upper'>
                <div>
                  <div className='title'>
                    <img src={logo} alt="912Communication 로고" />
                    <div className='mini'>미니과제</div>
                  </div>
                  
                  <div className='first-button'>
                    <button className={location.pathname === "/" ? "filled-button" : "transparent-button"} onClick={goToRSP}> 01_가위바위보 </button>
                    
                    <button className={location.pathname === "/todo" ? "filled-button" : "transparent-button"} onClick={goToToDo}>02_TODO</button>
                    
                  </div>
                </div>
              </div>              
    </div>
  )
}

export default Navigation
