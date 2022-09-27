import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { update, remove } from "../../../features/words/wordsSlice"
import { add } from '../../../features/chars/charSlice'

//should this be in drag and drop?

const Droppables = () => {


    const { saidWord } = useSelector(state => state.word)
  //  const { charsArr } = useSelector(state => state.char)
    const [charList, setCharList] = useState([])
   
    const dispatch = useDispatch()

    useEffect(() => {

        const listArray = (word) => {
           
            const removeLetters = word.split('').map(char => (Math.random() > 0.7 ? " " : char))
            console.log(removeLetters)

            const hashList = []
            for (let i = 0; i < removeLetters.length; i++){
                if (removeLetters[i] === ' ') {
                    hashList.push({
                        letter: removeLetters[i],
                        id: uuidv4(),
                        blank: true
                    })
                } else {
                    hashList.push({
                        letter: removeLetters[i],
                        id: uuidv4(),
                        blank: false
                    })
                }
            }
            console.log(hashList)
         
            return hashList
         
        }

        
        setCharList(listArray(saidWord))

      
    }, [saidWord, setCharList])

    useEffect(() => {
        if (charList) {
            
    dispatch(add({ charList }))
        }

      
    }, [dispatch, charList])

     
  
  
  

        const listItems = charList.map((char, idx) => {
            return (
                <li key={idx} id={char.id} className="listRow">
                    {char.letter}
                </li>
            )
      
        })

    return (
        <div className="contain">
            <>
            {listItems &&
            <ul className="dropList">
                {listItems}
            </ul>
                }
                  </>
        </div>
    )

}

export default Droppables