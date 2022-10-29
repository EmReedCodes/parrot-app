import React, { useState } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"


function ToggleSwitch() {
  //TODO: set preferences to local storage or redux

  //want to set theme based off toggle and switch it with state

//TODO: ill need to add toggle to localStorage so it also stays in position
  const [isToggled, setIsToggled] = useState(false)
  

  let currentTheme = localStorage.getItem("theme");
  if(!currentTheme) currentTheme = "light" && setIsToggled(false)
 
  const [theme, setTheme] = useLocalStorage("theme", currentTheme)

 let root = document.querySelector("html")
  root.setAttribute("data-theme", theme)

  // 1
// const setDark = () => {
//   //let root = document.querySelector("html")
//   //localStorage.setItem("theme", "dark");
//  // root.setAttribute("data-theme", "dark")
//   setTheme("dark")

// };

//   const setLight = () => {
//    // let root = document.querySelector("html")
   
//    // localStorage.setItem("theme", "light");
//     setTheme("light")
//    // root.setAttribute("data-theme", "light")

//   };
  
   const onToggle = e => {
    if (e.target.checked) {
      //let root = document.querySelector("html")
      setIsToggled(true)
      setTheme("dark")
     // root.setAttribute("data-theme", theme)
    } else {
      //let root = document.querySelector("html")
      setIsToggled(false)
      setTheme("light")
    //  root.setAttribute("data-theme", theme)
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
