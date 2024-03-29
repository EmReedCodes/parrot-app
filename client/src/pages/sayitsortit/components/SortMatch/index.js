import {
  closestCenter,
  DndContext,
  TouchSensor,
  MouseSensor,
  useSensor,
  KeyboardSensor,
  useSensors
} from "@dnd-kit/core"
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable"
import React, { useState, useEffect } from "react"
import SortableItem from "./SortableItem"
import { v4 as uuidv4 } from "uuid"
import shuffle from "lodash/shuffle"
import Submission from "./Submission"
import { useContext, useMemo } from "react"
import { WordContext } from "../../SayItSortIt"



const SortMatch = () => {
  const [pushed, setPushed] = useState(null);
  const [saidWord, setSaidWord] = useContext(WordContext)
  const [items, setItems] = useState([])
  
  const [initialItems, setInitialItems] = useState([])

  const triggerAnimatation = useMemo(() => {
    if (pushed === true) {
      
    }
  })
  
//testing
  
  useEffect(() => {
    const words = []
    if (saidWord.length > 0) {
      for (let i = 0; i < saidWord.length; i++) {
        words.push({
          id: uuidv4(),
          letter: saidWord[i],
          color: null
        })
      }
    }
    
    const shuffledWord = shuffle(words)
    setItems(shuffledWord)
    setInitialItems(shuffledWord)
  }, [saidWord])


  


  const [activeId, setActiveId] = useState(null)

 
  const mouseSensor = useSensor(MouseSensor)
  //had to take out pointersensor touch works now? https://github.com/clauderic/dnd-kit/issues/435

  const touchSensor = useSensor(TouchSensor)
  const keyboardSensor = useSensor(KeyboardSensor)

  const sensors = useSensors( touchSensor, keyboardSensor, mouseSensor)

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const onDragCancel = () => {
    setActiveId(null)
  }

  return (
    <>
      <div
        className="sortContainer"
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragCancel={onDragCancel}
        >
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={items.map(item => item.id)}
          >
            {items.map(item => (
              <SortableItem
                item={item.letter}
                key={item.id}
                id={item.id}
                color={item.color}
              />
            ))}
          </SortableContext>

          {/* <DragOverlay>{activeId ? activeId : null}</DragOverlay> */}
        </DndContext>
      </div>

      <Submission
        items={items}
        setItems={setItems}
        reset={onDragCancel}
        word={saidWord}
        initialItems={initialItems}
      />
    </>
  )
}

export default SortMatch
