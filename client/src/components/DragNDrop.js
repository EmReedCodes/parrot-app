//import Dictaphone from "./Dictaphone";
import Dictaphone from './Dictaphone';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useState } from "react";
const DragNDrop = (props) => {
    const { word } = props
//logic
//Im not able to make dynamic li with the word I need because it isnt rendered yet. 

    console.log(typeof word)
    //const sidebarItems = props.list1.map(i => <li>{i}</li>);
    // const listChars = props.word
    // //const charList = word.map(char => <li>{char}</li>)
    // console.log(listChars)
    // console.log(typeof listChars)
    console.log(word)
    const handleDragEnd = (result) => {

    }

    //because word isnt created yet

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <ul>
             
            </ul>
        </DragDropContext>
    );

}
 
export default DragNDrop;