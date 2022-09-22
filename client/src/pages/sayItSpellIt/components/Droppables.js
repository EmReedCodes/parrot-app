import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const Droppables = () => {
    const { saidWord } = useSelector(state => state.word)
    const [charList, setCharList] = useState([])

    useEffect(() => {


        const listArray = () => {
            const word = saidWord
            const removeLetters = word.map(char => (Math.random() > 0.7 ? " " : char))
            console.log(removeLetters)
            return removeLetters
        }

        
        
    }, [])

    return (
        <div className="contain">

        </div>
    )

}

export default Droppables