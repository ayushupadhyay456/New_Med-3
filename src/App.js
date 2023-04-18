import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./components/About";
// import Medbox from "./components/Medbox";
import RegisDoc from "./components/RegisDoc";
import Navbar from "./components/Navbar";
import RegisPat from './components/RegisPat'
import Admin from './components/Admin'

function App() {
  return (
  <>
  {/* <Dashboard/> */}
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/RegisDoc" element={<RegisDoc/>}></Route>
      <Route exact path="/RegisPat" element={<RegisPat/>}></Route>
      <Route exact path="/Admin" element={<Admin/>}></Route>
      

    </Routes>
  </Router>
      </>
  );
}

export default App;
