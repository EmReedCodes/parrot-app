//import Dictaphone from "./Dictaphone";
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useState } from "react";
const DragNDrop = (props) => {

    const { word } = props

    const handleDragEnd = (result) => {

    }

    const listItems = word.map((char, idx) => {
        return <li key={idx} id="listRow">{char}</li>
    })


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <ul>
                {listItems}
            </ul>
        </DragDropContext>
    );

}
 
export default DragNDrop;