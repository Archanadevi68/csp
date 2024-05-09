import Homepage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Report from "./pages/Report";
import { Route, Routes} from "react-router-dom";
import Photos from "./pages/Photos";
import './index.css';
function App(){
  return(
  <div className="App">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Report" element={<Report/>}/>
      <Route path="/Photos" element={<Photos/>}/>
      </Routes>
  </div>
  );
}
export default App;
