import{Link} from 'react-router-dom';

function Nav(props) {
    return ( 

<div className='nav'>
        
<Link to='/'>
        <div className='samp'>  
            LE'VONTE LARRY 
        </div>
    </Link>

<Link to='/websites'>
    <div className='sam'>  
        WEBSITES
    </div>
</Link>

<Link to='/blogs' >
        <div className='sam'>  
            BLOGS
        </div>
    </Link>


    <Link to='/cybersecurity'>
    <div className='sam'>  
            SECURITY
        </div>    
    </Link>
    
    <Link to='/apps'>
    <div className='sam'>  
            MOBILE
        </div>    
    </Link>
    <br/>

</div>
    );
}


export default Nav;