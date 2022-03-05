import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Sida1 from './sida1';
import Sida2 from './sida2';
import Sida3 from './sida3';
import Sida4 from './sida4';

function App() {
  return (
    <BrowserRouter>
<div>
<nav>
<Link to= '/'>
sida1
</Link>
<br/>
<Link to= '/sida2'>
sida2
</Link>
<br/>
<Link to= '/sida3'>
sida3
</Link>
<br/>
<Link to= '/sida4'>
sida4
</Link>
</nav>

<Routes>
<Route path="/" element={<Sida1 />} />
<Route path="/sida2" element={<Sida2 />} />
<Route path="/sida3" element={<Sida3 />} />
<Route path="/sida4" element={<Sida4 />} />
</Routes>
</div>
    </BrowserRouter>
  );
}

export default App;