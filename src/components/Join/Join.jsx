import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

import './Join.css'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_o44862j', 'template_9cd31uo', form.current, '_ewye399aguMb6HO6')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div><span className='stroke-text'>READY TO</span><span>LEVEL UP</span></div>
            <div><span>YOUR BODY</span><span className='stroke-text'>WITH US?</span></div>
        </div>
        <div className="right-j">
            <form  ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='email' placeholder='Enter your Email Address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
