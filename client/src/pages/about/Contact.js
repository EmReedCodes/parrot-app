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
          <p>Parrot is a continued work in process. Please feel free to contact me with any suggestions or ideas you may have. Feedback is also appreciated. Every user of Parrot is important and some of the best changes were from users like you. </p>
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