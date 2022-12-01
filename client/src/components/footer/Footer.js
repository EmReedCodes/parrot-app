import About from "../../pages/about/About"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillContacts } from "react-icons/ai"
import {FaBlogger } from "react-icons/fa"
import { IconContext } from "react-icons"

const Footer = () => {
    
    return (
        <footer className="container-fluid">
            
         <div  className="holdSocialIcon">
                
                    <a href="https://twitter.com/EmReedCodes" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><IconContext.Provider value={{ className: "icon social twitter" }}>
                        <AiFillTwitterCircle />
          </IconContext.Provider></a>
          <a href="https://github.com/EmReedCodes" target="_blank" rel="noopener noreferrer" aria-label="Github"><IconContext.Provider value={{ className: "icon social github" }}>
                        <AiFillGithub />
                      </IconContext.Provider></a>
                    <a href="https://www.linkedin.com/in/emilyjreed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconContext.Provider value={{ className: "icon social linkedin" }}>
                        <AiFillLinkedin />
                      </IconContext.Provider></a>
                   
                    <a href="https://www.emreedcodes.com/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio"><IconContext.Provider value={{ className: "icon social portfolio" }}>
                        <AiFillContacts />
          </IconContext.Provider></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Blog"><IconContext.Provider value={{ className: "icon social blog" }}>
                        <FaBlogger />
          </IconContext.Provider></a>
          
             
         </div>
            <span>©Parrot 2022</span>
        </footer>
        
      );
}
 
export default Footer;