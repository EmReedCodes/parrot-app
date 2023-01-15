import useLocalStorage from "../../../hooks/useLocalStorage"

function ToggleSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  const [toggled, setToggled] = useLocalStorage("toggle", false)

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
