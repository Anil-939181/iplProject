import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

function InPageNavigation({teams,children}) {
    const [index,setIndex]=useState(0); 
    const lineBottom=useRef();
    const btnRef=useRef();
    function togleBtn(btn,i){
        
        let {offsetWidth,offsetLeft}=btn
        lineBottom.current.style.width=offsetWidth+"px";
        lineBottom.current.style.left=offsetLeft+"px";
        setIndex(i)

    }   
    function changeIndex(i){
        setIndex(i)

    }
    useEffect(()=>{
        togleBtn(btnRef.current,0)
    },[])
  return (
    <div className="w-full">
        <div  className={'bg-blue-900 flex justify-between items-end mx-auto w-full'+(teams.length>2?" h-[100px]":" h-[50px]")}>
    {
        teams.length>2?
        
        teams.map(({path,title},i)=>(
             <Link to={path}><button 
            ref={i==0?btnRef:null} 
            key={i}
            className={
                ' px-7 py-3  text-sm lg:px-20 py-4  border-none hover:bg-gray-200/5'+
                (index==i?"text-white bg-gray-200/5 ": " text-gray-100")
            }
            onClick={(e)=>togleBtn(e.target,i)}>{title}
            </button></Link>
            
            
         )
        ):
         teams.map((data,i)=>(
            
            <button 
            ref={i==0?btnRef:null} 
            key={i}
            className={
                'bg-gray-400  p-1 w-[70%] h-full border-none '+
                (index==i?"text-white-200 ":" text-gray-200")
            }
            onClick={(e)=>togleBtn(e.target,i)}>{data}
            </button>
         )
        )
    }
    </div>
    {<hr ref={lineBottom} className=" border-2 border-white absolute duration-300" />}
    {
        teams.length>2?"":children[index]
    }
   
    </div>
    
    
  )
}

export default InPageNavigation