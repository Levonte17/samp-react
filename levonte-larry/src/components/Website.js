
import brush from '../assets/brush.jpg'
import colty from '../assets/colty.jpg'
import dih from '../assets/dih.jpg'
import e from '../assets/e.jpg'
import humble from '../assets/humble.jpg'
import samp from '../assets/samp.jpg'

import React from 'react';

function Website(props) {
    
    return(
        <div className="allcont">
    <h1>
        WEBSITES
    </h1>
            
            <a href="/websites">
                <img  className='img' alt='img' src={dih} />
            </a>

            <a href="/websites">
                <img className='img' alt='img' src={samp} />
            </a>

            <a href="/websites">
                <img className='img'  alt='img' src={brush} />
            </a>

            <a href="/websites">
                <img  className='img' alt='img' src={humble} />
            </a>

            <a href="/websites">
                <img  className='img' alt='img' src={colty} />
            </a>

            <a href="/websites">
                <img  className='img' alt='img' src={e} />
            </a>

        
        
        
    </div>
    );
}

export default Website;