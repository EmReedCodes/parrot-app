import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("moqbkava");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
    

    return ( 
        <article className="grid">
          <section id="contact">
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
            <textarea className='textBox'
              id="message"
              name="message"
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