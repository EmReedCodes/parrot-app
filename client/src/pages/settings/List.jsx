import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteWordForList, updateAndReplaceWord } from "../../features/bankWord/bankWordSlice"
import { AiFillEdit, AiFillDelete, AiFillSave } from "react-icons/ai"
import { IconContext } from "react-icons"

const List = ({ wordBank }) => {
  const [isActive, setIsActive] = useState(null)
  
  const ref = useRef(null)

  const dispatch = useDispatch()
  const { isSuccess, isError } = useSelector(state => state.wordBank)

  const changeToEdit = (e,i) => {
    if (isActive === i) {
      setIsActive(null)
      
    } else {
      //ref.current.setAttribute("contenteditable", true)
      setIsActive(i)
      
    }
  
  }

  const saveEdit = (id) => {
    console.log(id)
    let elm = document.querySelector('.itemWord').innerText
    console.log(elm)
  
    dispatch(updateAndReplaceWord({ id: id, text: elm }))
    setIsActive(false)
  }

  return (
    
      <section className="containList">
        <div className="holdAllWords">
          <ul>
            {wordBank.map((item, idx) => {
              return (
                <li key={item._id} id={item._id} className={isActive === idx ? "word editing" : "word edit"}>
                  <div className="itemWord"
                    contentEditable={isActive === idx ? true : false}
                    suppressContentEditableWarning={true}
                    type="text"
                    value={item.text}
                    ref={ref}
                    >
                    
                    {item.text}
                  </div>
                  <div className="editSaveDelete">
                    <div className="btn edit"
                      onClick={(e) => changeToEdit(e, idx)}>
                      <IconContext.Provider value={{ className: "listIcon" }}>
                        <AiFillEdit />
                      </IconContext.Provider>
                    </div>
                    <div className="btn save"
                      type="submit"
                      value="submit"
                    onClick={() => saveEdit(item._id)}>
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
