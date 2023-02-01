import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';



const SORTABLE_TRANSITION_DURATION = 250;


const SortableItem = (props) => {
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
        //border: '2px solid black',
        opacity: isDragging ? 0.5 : 1,
         background: color,
    //   width: "15%",
    //   height: "20%"
    // //  -webkit-animation: "var(--animation-shake-y), var(--animation-fade-in), var(--animation-slide-in-left);
    // // animation: "var(--animation-scale-down) reverse, var(--animation-fade-out) reverse"
     }
   
    return (
      <div
          id='sortTile'
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

