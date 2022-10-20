// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';



// const SORTABLE_TRANSITION_DURATION = 250;


// const SortableItem = (props) => {
//   const { id, item} = props;
//       const {
//     setNodeRef,
//     listeners,
//     isDragging,
//     transform,
//     transition,
//     attributes,
//   } = useSortable({
//     id,
//     transition: {
//       duration: SORTABLE_TRANSITION_DURATION,
//       easing: "ease"
//     }
//   });

//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform),
//         border: '2px solid black',
//         marginBottom: 5,
//         marginTop: 5,
//         opacity: isDragging ? 0.5 : 1,
//     }

//     // const style = {
//     //   width: "100%",
//     //   height: 50,
//     //   display: "flex",
//     //   alignItems: "center",
//     //   justifyContent: "center",
//     //   border: "1px solid black",
//     //   margin: "10px 0",
//     //   background: "white"
//     // };

//     return (
//         <div
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


import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

const SortableItem = ({
    id,
    item
}) => {
    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging,
    } = useSortable({ id: id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        border: '2px solid black',
        marginBottom: 5,
        marginTop: 5,
        opacity: isDragging ? 0.5 : 1,
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