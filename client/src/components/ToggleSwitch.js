import React, { useState } from "react"

function ToggleSwitch() {
  //TODO: set preferences to local storage or redux

  const [isToggled, setIsToggled] = useState(false)

  const onToggle = e => {
    let root = document.querySelector("html")
    let check = e.target.checked
    if (check) {
      root.setAttribute("data-theme", "dark")
      setIsToggled(true)
    } else {
      root.setAttribute("data-theme", "light")
      setIsToggled(false)
    }
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  )
}
export default ToggleSwitch
