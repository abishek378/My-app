import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
    <div className='contact_container'>


      <div>
        <span>Talk To Sales</span>
        <p>Interested? Just pick up the phone to chat with a member of our Team</p>

        <span id="phno"><strong>  +1 877 922 0088</strong></span>

      </div>


  
        
      <div>
      <span>Contact Customer Support</span>
        <p>Sometimes you need a little help from your friends.Or a support rep.Don't worry worry ... we're here for you </p>

        <button className='contact_btn'>Contact Support</button>
    </div>      
</div>
</div>
  )
}

export default Contact