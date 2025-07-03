import React from 'react'
import RockLogo from './image 1.png'
import ScissorsLogo from './image 2.png'
import PaperLogo from './image 3.png'

const Box = (props) => {

    const getResultClass = () => {
  if (props.result === "Win") return "win";
  if (props.result === "Lose") return "lose";
  if (props.result === "Draw") return "draw";
  return "";
};

  return (
    <div> 
        <div className={`USER ${getResultClass()}`}>
            {props.item ? ( <img src={props.item.img} alt={props.item.name} /> ) : ( <div className="start-message">게임을 시작해주세요.</div>)}
        </div>
    </div>
        
        )
    }
            

export default Box
