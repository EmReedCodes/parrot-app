import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';


const SORTABLE_TRANSITION_DURATION = 250;

//so when submitted if answer is incorrect run shake animation
//using state clicked to add class
const SortableItem = (props) => {
  const [clicked, setClicked] = useState(true)
    const { id, item, color } = props;

      const {
    setNodeRef,
    listeners,
    isDragging,
    transform,
    transition,
    attributes,
  } = useSortable({
    id,
    transition: {
      duration: SORTABLE_TRANSITION_DURATION,
      easing: "ease"
    }
  });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0.5 : 1, 
     }
   
    return (
      <div
        id='sortTile'
        className={color}
        onAnimationEnd={() => setClicked(false)}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            {item}
        </div>
    )
}

export default SortableItem;

