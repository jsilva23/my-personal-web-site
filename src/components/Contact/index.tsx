import React from 'react';
import * as S from './style';

const Contact = () => {
  return (
    <S.Contact>
      <h1>Hire Me</h1>

      <p>
        I am available for freelance work. Connect with me via phone:{' '}
        <strong>+244 939 606 016</strong> or email:{' '}
        <strong>admin@example.com</strong>
      </p>

      <form action=''>
        <input type='text' name='name' id='name' placeholder='Your Name *' />
        <input type='text' name='name' id='name' placeholder='Your Email *' />
        <input type='text' name='name' id='name' placeholder='Write a Subject' />
        <textarea name="message" id="message" cols={30} rows={10} placeholder='Your Message'></textarea>
        <button type="submit">Send Message</button>
      </form>
    </S.Contact>
  );
};

export default Contact;
