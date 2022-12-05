import Home from '../pages/Home';

import { Routes, Route } from 'react-router-dom';


function Main(props) {
    return(
        <main>

<Routes>
     <Route path="/" element={<Home  />}/>
</Routes>

     </main>
    )
};

export default Main;