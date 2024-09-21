import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login-SignUP/Login";
import SignUP from "./Components/Login-SignUP/SingUP";
import MainNavbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         {/* <MainNavbar /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/SignUP" element={<SignUP/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
