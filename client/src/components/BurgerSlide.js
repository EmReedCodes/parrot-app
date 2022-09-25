import { slide as Menu } from "react-burger-menu";

export default function Sidebar() {
   return(
      
                    <Menu>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a id="settings" className="menu-item" href="/settings">Settings</a>
                    </Menu>
   )
}