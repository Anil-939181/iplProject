
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";
function App() {
 return(
  <div className="max-w-screen min-h-screen mx-auto bg-gray-900">
    <Routes>
    <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/pointsTable" element={<PointsTable/>}/>

        <Route path="matchDetail/:id" element={<MatchDetail/>}/>
        <Route path="/news" element={<h1>News will Visible soon....</h1>}/>


    </Route>
    
  </Routes>
  </div>



 
 
 )

}

export default App
