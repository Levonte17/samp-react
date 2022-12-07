
import brush from '../assets/brush.jpg'
import colty from '../assets/colty.jpg'
import dih from '../assets/dih.jpg'
import e from '../assets/e.jpg'
import humble from '../assets/humble.jpg'
import samp from '../assets/samp.jpg'

import React from 'react';

function Websites(props) {
    
    return(
      <div className=''>
        <div className="allcont">
    <h1>
        PREVIOUS WEBSITES
    </h1>
            
            <a href="digital-investors-hub.netlify.app">
                <img alt='img' src={dih} />
            </a>

            <a href="https://sampfitness.netlify.app">
                <img alt='img' src={samp} />
            </a>

            <a href="https://brushcutz.netlify.app">
                <img alt='img' src={brush} />
            </a>

            <a href="/websites">
                <img alt='img' src={humble} />
            </a>

            <a href="/websites">
                <img alt='img' src={colty} />
            </a>

            <a href="https://ekustoms.adaptable.app">
                <img alt='img' src={e} />
            </a>

        
        
        
    </div>
</div>

    );
}

export default Websites;