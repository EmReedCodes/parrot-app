import React, { useState, useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"


function ToggleSwitch() {
  
 //TODO: would useReducer me better? useEffect to change ? https://kentcdodds.com/blog/should-i-usestate-or-usereducer
  let currentTheme = localStorage.getItem("theme");
  let currentToggle = localStorage.getItem("toggled");
  if(!currentToggle) currentToggle = false
  if(!currentTheme) currentTheme = "light" 
 
  const [theme, setTheme] = useLocalStorage("theme", currentTheme)
  const [toggled, setToggled] = useLocalStorage("toggle", currentToggle)

 let root = document.querySelector("html")
  root.setAttribute("data-theme", theme)


   const onToggle = e => {
    if (e.target.checked) {
      setToggled(true)
      setTheme("dark")
    } else {
      setToggled(false)
      setTheme("light")
    }
  }

  return (

   
    <label className="toggle-switch">
      <input type="checkbox" checked={toggled} onChange={onToggle} />
      <span className="switch" />
    </label>

  )

}
export default ToggleSwitch
