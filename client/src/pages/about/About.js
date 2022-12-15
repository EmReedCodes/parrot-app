import ContactForm from "./Contact";
import "./styles/style.css"
//import { Link } from "react-router-dom";
const About = () => {
    return (
     <section className="about">
            <nav aria-label="breadcrumb"> 
                <ul>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
                <article className="grid">
                    <section>
                        <h1>Parrot's Origin Story</h1>
                        <p>Parrot originally began for my son but quickly realized the issues he faced with speech and spelling were something many kids also struggled with. After watching him use Siri to talk to his friends and navigate the web I thought to myself what if he had a place to practice both his speech and his spelling. That was the day the idea of Parrot began to take shape.</p>
                </section>
                <section className="origin-bck"></section>
                </article>
            <article id="resources" className="grid">
                <section>
                    <h2>Resources</h2>
                    <ul>
                        <li>
                            <span>ASHA ProFind to find a speech-language pathologist or audiologists near you.</span>
                            <a href="https://www.asha.org/profind/" target="_blank" rel="noopener noreferrer">https://www.asha.org/profind/</a>
                        </li>
                        <li>
                            <span>Activities to encourage speech and language development from birth to 6 years.</span>
                            <a href="https://www.asha.org/public/speech/development/activities-to-encourage-speech-and-language-development/" target="_blank" rel="noopener noreferrer">https://www.asha.org/public/speech/development/activities-to-encourage-speech-and-language-development/</a>
                        </li>
                        <li>
                            <span>Resources for parents and children with word lists, activities, and apps.</span>
                            <a href="https://www.home-speech-home.com/" target="_blank" rel="noopener noreferrer">https://www.home-speech-home.com/</a>
                        </li>
                        <li>
                            <span>Great site for printables, blog posts, and various topics on speech therapy.</span>
                            <a href="https://speechandlanguageathome.com/" target="_blank" rel="noopener noreferrer">https://speechandlanguageathome.com/</a>
                        </li>
                        <li>
                            <span>Free therapy material including a vocabulary page, speech sound, expressive language, and receptive language resources.</span>
                            <a href="https://www.speechandlanguagekids.com/free-speech-language-resources/" target="_blank" rel="noopener noreferrer">https://www.speechandlanguagekids.com/free-speech-language-resources/</a>
                        </li>
                 </ul>
                </section>
                </article>
            <article id="aboutme" className="grid">
            <section className="aboutme-bck"></section>
            <section>
                        <h2>About Me</h2>
                        <p>Hey, I'm Emily the creator of Parrot. Since the moment I wrote my very first line of code, the ideas began. Parrot was my biggest one yet and I hope you enjoy it! In my free time I enjoy just hanging out with my cat and son watching youtube. I also volunteer with Akron Women In Tech and try to stay active in my local community as well as my online community. I have done freelancing in the past but am currently looking for my next full time position on a team.</p>
                </section>
                
             </article>
            <ContactForm />
            </section>
         )

}

export default About;