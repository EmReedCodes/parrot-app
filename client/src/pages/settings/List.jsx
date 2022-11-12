import { useRef, useState, useEffect } from "react"
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai"
import { IconContext } from "react-icons"

const List = ({ wordBank }) => {
  const [isActive, setIsActive] = useState(null)
  //const [focusedElementIndex, setFocusedElementIndex] = useState(0)
  const ref = useRef(null)
  const parentRef = useRef(null)


  // useEffect(() => {
  //   setFocusedElementIndex(0);
  // }, [items])


  //  <div className={isActive ? "app" : null}>

  // function clientsideEditTodo(event) {
  //     event.target.setAttribute('aria-busy', 'false')

  //     let elm = event.target.closest('.task')

  //     elm.querySelector('[contenteditable]').setAttribute('contenteditable', false)
  //     elm.classList.toggle('todo-editing')
  //   }
  const changeToEdit = (e,i) => {
    if (isActive === i) {
      setIsActive(null)
      
    } else {
      //ref.current.setAttribute("contenteditable", true)
      setIsActive(i)
      
    }
  //  // setIsActive(true)
  //   console.log("click")
  //   //let elm = e.target.closest('li')
    
  //   // console.log(elm)
  //   //console.log(content)
  //   //elm.querySelector
  //   ref.current.setAttribute("contenteditable", true)
  //   if (ref !== null) {
  //    setIsActive(true)
   }
  const saveEdit = () => {
    
  }

  return (
    
      <section className="containList">
        <div className="holdAllWords">
          <ul>
            {wordBank.map((item, idx) => {
              return (
                <li key={item} className={isActive === idx ? "word editing" : "word edit"}>
                  <div className="itemWord"
                    contentEditable={isActive === idx ? true : false} 
                    ref={ref}>
                    {item}
                  </div>
                  <div className="editSaveDelete">
                    <div className="btn edit"
                      onClick={(e) => changeToEdit(e, idx)}>
                      <IconContext.Provider value={{ className: "listIcon" }}>
                        <AiFillEdit />
                      </IconContext.Provider>
                    </div>
                    <div className="btn save"
                    onClick={() => saveEdit()}>
                      <IconContext.Provider value={{ className: "listIcon" }}>
                        <AiFillSave />
                      </IconContext.Provider>
                    </div>
                    <div className="btn delete">
                      <IconContext.Provider value={{ className: "listIcon" }}>
                        <AiFillDelete />
                      </IconContext.Provider>
                    </div>
        
                  </div>
                </li>
              )
            })
            }
          </ul>
        </div>
      </section>
  )
}

export default List
