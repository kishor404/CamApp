import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar.js";

import CamApp from "./CamApp.js";
import HoxComponents from "./HoxComponents.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Pages">
          <Routes>
            <Route path="/" element={<CamApp/>}/>
            <Route path="/Hox" element={<HoxComponents/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
