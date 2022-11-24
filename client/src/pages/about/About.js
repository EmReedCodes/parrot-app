import ContactForm from "./Contact";
import "./styles/style.css"
import { Link } from "react-router-dom";
const About = () => {
    return (
     <section>
        
                <span>Jump to</span>
             
                <article className="grid">
                    <section>
                        <h1>Parrot's Origin Story</h1>
                        <p>I started Parrot for my son but quickly realized the issues he faced with speech and spelling were something many kids also struggled with. After watching him use Siri to talk to his friends and navigate the web I thought to myself what if he had a place to practice both his speech and his spelling. That was the day the idea of Parrot began to take shape.</p>
                </section>
                <section className="origin-bck"></section>
                </article>
            
            
            <ContactForm />
            </section>
         )

}

export default About;