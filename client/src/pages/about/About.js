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
                        <p>The idea for Parrot arose from my desire to help my son with his speech and spelling difficulties. I soon realized that many children face similar challenges, and was inspired by my son's use of Siri to communicate and browse the internet. I envisioned a platform where children could practice both speech and spelling, and Parrot was born.</p>
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
                        <p>Hello, I'm Emily, the creator of Parrot. From the moment I started coding, my mind was filled with ideas, and Parrot was my biggest project to date. I hope you enjoy it! In my leisure time, I love spending time with my cat and son, watching YouTube. I also volunteer with Akron Women in Tech and actively engage in both my local and online communities. While I have a background in freelance work, I am currently seeking my next full-time role as part of a team.</p>
                </section>
                
             </article>
            <ContactForm />
            </section>
         )

}

export default About;