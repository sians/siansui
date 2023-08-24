import flynn from 'assets/flynn.png';
import { Nav, Typography, Link } from 'components';

import { Page } from './styles';

const Contact = () => {
  return (
    <>
      <Nav />
      <Page>
        <Typography.Heading size={2}>
          Contact
        </Typography.Heading>
        <img 
          src={flynn}
          alt='Sir Snoot (aka Flynn the absolute muppet) hard at work fielding the many attempts made by personnages other than himself to gain my attention.'
        />

        <section>
          <Typography.Body>
            If you'd like to get in touch, to ask a question, make a suggestion, or just to have a chat re all things React, then I'd love to hear from you.
          </Typography.Body>
          <Typography.Body>
            You can reach me at:
          </Typography.Body>
          <Link 
            text='hello@sians.studio'
            url='hello@sians.studio'
            isBold
            isMailto
          />
            
        </section>

      </Page>
    </>
  )
}

export default Contact;
