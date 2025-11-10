import  {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
   return (
    <div>
      <BrowserRouter>
      <h1>React router Example</h1>
      <nav style ={{marginButtom:"20px"}}>
        <Link to="/ style={{margin:10px}}"> Home</Link>
        <Link to="/About" style={{margin:"10px"}}> About</Link>
        <Link to="/Contact" style={{margin:"10px"}}> Contact</Link>
      </nav>

      <Routes>
        <Route path="/home"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>

);
}


export default App;