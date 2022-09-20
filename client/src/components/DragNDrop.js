//import Dictaphone from "./Dictaphone";
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useState } from "react"
import { useEffect } from "react"
const DragNDrop = props => {
  const { word, finalWord, randomChars, setRandomChars } = props

  //     useEffect(() => {
  //  //useeffect for the array alphabet
  //         const createArrayOfLetters = (splitWord, fullWord) => {
  //             let randomChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  //             const draggableChars = finalWord.split('').filter((item, idx) => item !== word[idx])
  //             console.log(draggableChars)

  //             while (draggableChars.length < 5) {
  //                 const idx = Math.floor(Math.random() * 26)
  //                 if (draggableChars.includes(randomChars[idx])) {
  //                     continue
  //                 } else {
  //                     draggableChars.push(randomChars[idx])
  //                 }
  //             }
  //             console.log(draggableChars)
  //             return draggableChars
  //         }
  //        setRandomChars(createArrayOfLetters(word, finalWord))

  //     }, [word, finalWord, setRandomChars ])

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
      console.log(draggableChars)
      return draggableChars
    }
      let temp = createArrayOfLetters(word, finalWord)
          setRandomChars(temp)
  }, [word, finalWord, setRandomChars])

  const handleDragEnd = result => {}

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

  const listRandomItems = function (randomChars) {
    return (
      <>
    
        {[...randomChars].map((character, index) => {
          return (
            <li key={index} id="listColumn">
              {character}
            </li>
          )
        })}
      </>
    )
  }

    // const listRandomItems = [...randomChars].map((char, idx) => {
    //   return (
    //     <li key={idx} id="listColumn">
    //       {char}
    //     </li>
    //   )
    // })
//    {randomChars !== undefined && randomChars !== null && <ul>{listRandomItems(randomChars)}</ul>}
  //my drop zone will only be the empty spaces in li or _ currently
  //so to focus in on dropzones in listItem find them by idx or ' ' ?

  return (
      <DragDropContext onDragEnd={handleDragEnd}>
          
          {randomChars !== undefined && randomChars !== null && <ul>{listRandomItems(randomChars)}</ul>}
        

      <ul>{listItems}</ul>
    </DragDropContext>
  )
}

export default DragNDrop
