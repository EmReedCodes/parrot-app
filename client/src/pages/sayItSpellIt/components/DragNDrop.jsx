//import Dictaphone from "./Dictaphone";

import { useState, useEffect } from "react"
import Droppables from "./Droppables"
const DragNDrop = (props) => {

  //const { word, finalWord, randomChars, setRandomChars } = props


  // useEffect(() => {
  //   const createArrayOfLetters = (splitWord, fullWord) => {
  //     let randomChars = [
  //       "a",
  //       "b",
  //       "c",
  //       "d",
  //       "e",
  //       "f",
  //       "g",
  //       "h",
  //       "i",
  //       "j",
  //       "k",
  //       "l",
  //       "m",
  //       "n",
  //       "o",
  //       "p",
  //       "q",
  //       "r",
  //       "s",
  //       "t",
  //       "u",
  //       "v",
  //       "w",
  //       "x",
  //       "y",
  //       "z"
  //     ]

      // const createLetterHash = (chars) => {
      //   const letterHash = {}
      //   for (let i = 0; i < letterHash.length; i++){
      //     letterHash
      //   }
     // }

  //     const draggableChars = finalWord.split("").filter((item, idx) => item !== word[idx])
  //     console.log(draggableChars)
      
  //     //setting them alphabet
  //     while (draggableChars.length < 5) {
  //       const idx = Math.floor(Math.random() * 26)
  //       if (draggableChars.includes(randomChars[idx])) {
  //         continue
  //       } else {
  //         draggableChars.push(randomChars[idx])
  //       }
  //       }
  //       //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //       for (let i = draggableChars.length - 1; i > 0; i--) {
  //           const j = Math.floor(Math.random() * (i + 1));
  //           [draggableChars[i], draggableChars[j]] = [draggableChars[j], draggableChars[i]];
  //       }
  //     console.log(draggableChars)
  //     return draggableChars
  //   }

 


  //     let temp = createArrayOfLetters(word, finalWord)
  //         setRandomChars(temp)
  // }, [word, finalWord, setRandomChars])


  
  // const listItems = word.map((char, idx) => {
  //   if (char === " ")
  //     return (
  //       <li key={idx} id="listRow">
  //         {" "}
  //       </li>
  //     )
  //   else
  //     return (
  //       <li key={idx} id="listRow">
  //         {char}
  //       </li>
  //     )
  // })




  // const listRandomItems = randomChars.map((character, index) => {
  //         return (
  //           <li key={index} id="listRandom">
  //             {character}
  //           </li>
  //         )
  // })

  //      
  // <ul>{listRandomItems}</ul>
        

  // <ul>{listItems}</ul>
  // <div className="check">{ randomChars}</div>
//move item from one list to another
//  <Draggable id="draggable">

//   const letterObj = (chars) => {
  
// }

  


  return (

      <div className="dnd">
      <Droppables />
      
      </div>

  )
}

export default DragNDrop
