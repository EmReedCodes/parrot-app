import About from "../../pages/about/About"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillContacts } from "react-icons/ai"
import { IconContext } from "react-icons"

const Footer = () => {
    
    return (
        <footer className="container-fluid">
            
         <section  className="holdSocialIcon">
                
                    <a href="#" aria-label="Twitter"><IconContext.Provider value={{ className: "socialIcon" }}>
                        <AiFillTwitterCircle />
                      </IconContext.Provider></a>
                    <a href="#" aria-label="LinkedIn"><IconContext.Provider value={{ className: "socialIcon" }}>
                        <AiFillLinkedin />
                      </IconContext.Provider></a>
                    <a href="#" aria-label="Github"><IconContext.Provider value={{ className: "socialIcon" }}>
                        <AiFillGithub />
                      </IconContext.Provider></a>
                    <a href="#" aria-label="Portfolio/Contact"><IconContext.Provider value={{ className: "socialIcon" }}>
                        <AiFillContacts />
                      </IconContext.Provider></a>
             
         </section>
            <h5>©Parrot 2022</h5>
        </footer>
        
      );
}
 
export default Footer;