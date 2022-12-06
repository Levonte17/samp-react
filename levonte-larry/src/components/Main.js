import Home from '../pages/Home';
import Websites from '../pages/Websites';
import Blogs from '../pages/Blogs';
import Mobiles from '../pages/Mobiles';
import Cybers from '../pages/Cybers';

import { Routes, Route } from 'react-router-dom';

function Main(props) {
    return(
        <main>

<Routes>
     <Route path="/" element={<Home  />}/>
</Routes>

<Routes>
     <Route path="/websites" element={<Websites  />}/>
</Routes>

<Routes>
     <Route path="/blogs" element={<Blogs  />}/>
</Routes>

<Routes>
     <Route path="/apps" element={<Mobiles  />}/>
</Routes>

<Routes>
     <Route path="/cybersecurity" element={<Cybers  />}/>
</Routes>


     </main>
    )
};

export default Main;