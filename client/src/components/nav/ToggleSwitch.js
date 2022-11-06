import React, { useState, useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"


function ToggleSwitch() {
  
 
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
      //let root = document.querySelector("html")
      //setIsToggled(true)
      setToggled(true)
      setTheme("dark")
     // root.setAttribute("data-theme", theme)
    } else {
      //let root = document.querySelector("html")
      setToggled(false)
      setTheme("light")
    //  root.setAttribute("data-theme", theme)
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
