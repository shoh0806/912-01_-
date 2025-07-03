import { useState } from 'react';
import React from 'react'
import RockLogo from './image 1.png'
import ScissorsLogo from './image 2.png'
import PaperLogo from './image 3.png'
import heartLogo from './mdi_heart.svg'
import heartOutlineLogo from './mdi_heart-outline.svg'
import Box from '../component/Box'
import './RockScissorsPaper.css'

const choice = {
  Rock : {
    name:"Rock",
    img:RockLogo
  },
  Scissors : {
    name:"Scissors",
    img:ScissorsLogo
  },
  Paper : {
    name:"Paper",
    img:PaperLogo

  }
}

const RockScissorsPaper = () => {

  const [ userSelect , setUserSelect ] = useState(null);

  const [ computerSelect , setComputerSelect ] = useState(null);

  const [ result , setResult ] = useState("")

  const [winCount, setWinCount] = useState(0);  // 승리 횟수

  const [life, setLife] = useState(3);          // 남은 목숨

  const [showReset, setShowReset] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false); // 게임 종료 여부

  const resetGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setWinCount(0);
    setLife(3);
    setShowReset(false);
    setIsGameOver(false);
  };


  const play=(userChoice)=>{
    if (isGameOver) return;

    const user = choice[userChoice]
    setUserSelect(user)

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  
    const gameResult = judgement(user, computerChoice)
    setResult( gameResult )

    if (gameResult === "Win") {
      setWinCount(prev => {
    const newCount = prev + 1;
    if (newCount === 3) {
      alert("승리하셨습니다.");
      setShowReset(true);
      setIsGameOver(true);
    }
    return newCount;
  });

  } else if (gameResult === "Lose") {
    setLife((prev) => {
        const newLife = prev - 1;
        if (newLife === 0) {
          alert('패배하셨습니다.');
          setIsGameOver(true);
          setShowReset(true);
        }
        return newLife;
      });
    }
  };

  const judgement = (user,computer)=>{
    if(user.name === computer.name){
      return "Draw"
    }else if (user.name === "Rock"){
      return computer.name === "Scissors"? "Win" : "Lose"
    }else if (user.name === "Paper"){
      return computer.name === "Rock"? "Win": "Lose"
    }else if (user.name === "Scissors"){
      return computer.name === "Paper"? "Win" :"Lose"
    }

  }
  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    
    return choice[final]
    
  }

  return (
    <div>
      <div className='upper'>
        <div className='game'>
          <div className='remaining-life'>
            <p>남은목숨</p>
            {[...Array(3)].map((_, idx) => (<img key={idx} src={idx < life ? heartLogo : heartOutlineLogo} alt='heart'/>
  ))}
          </div>

          <div className='victory'>
            <p>승리횟수</p>
            <h1>{winCount}/3</h1>
          </div>
        </div>
    
        <div>
          <p className='rule'>규칙</p>
          <p>1.목숨은 총 3개!</p>
          <p>2.목숨이 없어지기 전에 컴퓨터를 3번 이기면 승리</p>
          <p>3.비기면 무효!</p>
        </div>
      </div>

    <div className='lower'>
        <div className='gameName'>  
          <div> COM</div>    
          <div>USER</div>
        </div>
        
        <div className='GameRender'>
          
          <Box item={computerSelect} result={result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Draw"} />


          <div className = 'userWithButton'>
            <Box item = {userSelect} result={result}/>
            <div className='userSelect'>
                <button onClick={() => play("Scissors")}>가위</button>
                <button onClick={() => play("Rock")}>바위</button>
                <button onClick={() => play("Paper")}>보</button>
            </div>
          </div>
         
        </div>
       
    </div>
    
          <footer>
            {showReset && ( <button className='try-again' onClick={resetGame}>TRY AGAIN</button>)}
          </footer>
           
    </div>
  )
}

export default RockScissorsPaper