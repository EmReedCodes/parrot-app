import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("moqbkava");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
    

    return ( 
      <article id="contact" className="grid">
        <section className='wordGame'>
          <h2>Contact</h2>
          <p>I'm constantly striving for improvement and value the contributions of my users. If you have any suggestions, ideas, or feedback, please don't hesitate to reach out. Your input is essential to the ongoing success and growth. Thank you for using Parrot, and I look forward to hearing from you!</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="text">Message</label>
            <textarea className='textBox'
              id="message"
              name="message"
              rows="6"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
                  </form>
          </section>
        </article>
     );
}
 
export default ContactForm;