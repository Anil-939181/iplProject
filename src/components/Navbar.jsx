import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import InPageNavigation from './InPageNavigation.jsx'
function Navbar() {
  return (
    <div className='w-full lg:w-[50%]  flex flex-col items-center mx-auto bg-gray-700 text-white'>
    <InPageNavigation teams={[{title:"MATCHES",path:"/"},{title:"NEWS",path:"/news"},{title:"TABLE",path:"/pointsTable"}]}>
      
    </InPageNavigation>
        {/* <Link to={"/matches"}><h1>MATCHES</h1></Link>
        <Link to={"/pointsTable"}><h1>TABLE</h1></Link>
     */}
    <Outlet/>
    </div>
    
    
  )
}

export default Navbar