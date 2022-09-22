import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid';

const Droggables = () => {

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

      const createLetterHash = (chars) => {
        const letterHash = {}
        for (let i = 0; i < letterHash.length; i++){
          letterHash
        }
     }

      const draggableChars = finalWord.split("").filter((item, idx) => item !== word[idx])
      console.log(draggableChars)
      
      //setting them alphabet
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



    return ( 

     );
}
 
export default Droggables;