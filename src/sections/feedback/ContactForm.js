import '../../App.css'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgwolrl");
  if (state.succeeded) {
      return <p className="thanks">Thanks for joining!</p>;
  }
  return (
    <div>
      <form className="message" onSubmit={handleSubmit}>
      <label className='feedbackText' htmlFor="email">
        Send us a message
      </label>
      <input  className="sbm" placeholder='Your email...'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="sbm" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default ContactForm;
