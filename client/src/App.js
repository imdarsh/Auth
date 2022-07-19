import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
