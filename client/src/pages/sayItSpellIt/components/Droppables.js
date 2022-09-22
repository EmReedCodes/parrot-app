import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid';


const Droppables = () => {
    const { saidWord } = useSelector(state => state.word)
    const [charList, setCharList] = useState([])
    const [justLetters, setJustLetters] = useState([])

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
    }, [saidWord])


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
            <ul>
                {listItems}
            </ul>
                }
                  </>
        </div>
    )

}

export default Droppables