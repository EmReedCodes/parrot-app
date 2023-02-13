import { Link } from "react-router-dom"
import { useState } from "react"
const DropdownMenu = ({ list, action = null, label }) => {

  return (
    <details className="dropDown" role="list" dir="rtl">
      <summary aria-haspopup="listbox" role="link" className="secondary">
        {label}
      </summary>
      <ul role="list">
        {list.map(item => (
          <li key={item.title} onClick={item.title === "logout" ? action : undefined}>
            {item.toggle ? (
              <div className="div">
                <span className="toggleLabel">Change Theme</span>
                {item.toggle}
              </div>
            ) : (
                <Link to={item.link}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </details>
  )
}

export default DropdownMenu
