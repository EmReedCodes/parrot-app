//import Dictaphone from "./Dictaphone";
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useState } from "react"
import { useEffect } from "react"
const DragNDrop = props => {
  const { word, finalWord, randomChars, setRandomChars } = props


  useEffect(() => {
    const createArrayOfLetters = (splitWord, fullWord) => {
      let randomChars = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ]

      const draggableChars = finalWord.split("").filter((item, idx) => item !== word[idx])
      console.log(draggableChars)

      while (draggableChars.length < 5) {
        const idx = Math.floor(Math.random() * 26)
        if (draggableChars.includes(randomChars[idx])) {
          continue
        } else {
          draggableChars.push(randomChars[idx])
        }
        }
        //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for (let i = draggableChars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [draggableChars[i], draggableChars[j]] = [draggableChars[j], draggableChars[i]];
        }
      console.log(draggableChars)
      return draggableChars
    }
      let temp = createArrayOfLetters(word, finalWord)
          setRandomChars(temp)
  }, [word, finalWord, setRandomChars])


//Independent nested lists - a list can be a child of another list, but you cannot drag items from the parent list into a child list
  
  const listItems = word.map((char, idx) => {
    if (char === " ")
      return (
        <li key={idx} id="listRow">
          {" "}
        </li>
      )
    else
      return (
        <li key={idx} id="listRow">
          {char}
        </li>
      )
  })


  const listRandomItems = randomChars.map((character, index) => {
          return (
            <li key={index} id="listRandom">
              {character}
            </li>
          )
  })
//move item from one list to another


console.log(typeof randomChars)

  return (
      <DragDropContext>
          
          <ul>{listRandomItems}</ul>
        

      <ul>{listItems}</ul>
      <div className="check">{ randomChars}</div>
    </DragDropContext>
  )
}

export default DragNDrop
