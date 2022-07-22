import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} exact>
       
        </Route>

        <Route path="/about" exact element={ <AboutPage></AboutPage>}> 
       
        </Route>
      </Routes>
      
    </Router>
  );
  }

export default App;
