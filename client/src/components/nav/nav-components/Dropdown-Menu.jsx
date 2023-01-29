import { Link } from "react-router-dom"
import ToggleSwitch from "./ToggleSwitch"


const DropdownMenu = ({ list, action = null, label }) => {

   console.log(list)
  return (
      <details role="list" dir="rtl" >
         
      <summary aria-expanded="true" role="link" className="secondary">
        {label}
      </summary>
      <ul role="listbox" >
        {list.map(item => (
            <li key={item.title} onClick={item.title === 'logout' ? action : undefined}>
                {item.toggle ?
                    <div className="div">
                        <span className="toggleLabel">Change Theme</span>
                         {item.toggle}  
                  </div>
                 
                    :
                    <Link to={item.link}>{item.title}</Link>
            }
     
          </li>
        ))}
      </ul>
    </details>
  )
}


export default DropdownMenu
