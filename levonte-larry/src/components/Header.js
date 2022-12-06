import header from '../assets/header.jpg'


function Header(props) {
    return(
        <div>
        <h1>
            <img className='img1' src={header} alt='img' />
        </h1>
        </div>
    )
};

export default Header;