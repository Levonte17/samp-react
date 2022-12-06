import calls from '../assets/calls.jpeg';
import instagram from '../assets/instagram.jpeg';
import facebook from '../assets/facebook.jpeg';
import email from '../assets/email.jpeg';
import React from 'react';

function Contact(props) {
    return(

        <div className="allcont">
            
            <h1>CONTACT US</h1>
            <a href="mailto:levontelarry@digital-investors-hub.com">
                <img  className='img' src={email} alt="contact" />               
            </a>

            <a href="tel:+9124465582">
                <img  className='img' src={calls} alt="contact" />
            </a>     

            <br/>

            <a href="https://www.instagram.com/the.digital.doctor/">
                <img  className='img' src={instagram} alt="contact" />
            </a>
        
            <a href="https://www.facebook.com/profile.php?id=100086642206680">
                <img  className='img' src={facebook} alt="contact" />               
            </a>

    
</div>

    );
}

export default Contact;