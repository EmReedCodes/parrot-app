import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



const SORTABLE_TRANSITION_DURATION = 250;


const SortableItem = (props) => {
    const { id, item, isCorrect, color } = props;
    // console.log(isCorrect)
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
        border: '2px solid black',
        opacity: isDragging ? 0.5 : 1,
        background: color,
        width: "15%"
    }
   
    return (
        <div
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


// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import React from 'react';
// const SORTABLE_TRANSITION_DURATION = 250;


// const SortableItem = ({id, item}) => {
//       const {
//     setNodeRef,
//     listeners,
//     isDragging,
//     transform,
//     transition,
//     attributes,
//   } = useSortable({
//     id,
//       transition: {
//       duration: SORTABLE_TRANSITION_DURATION,
//       easing: "ease"
//     }
//   });

//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform),
//         border: '2px solid black',
//         opacity: isDragging ? 0.5 : 1,
//         background: "#eb9e2e"
         
//     }

//     return (
//         <div
//             className='sortItem'
//             ref={setNodeRef}
//             {...attributes}
//             {...listeners}
//             style={style}
//         >
//             {item}
//         </div>
//     )
// }

// export default SortableItem;