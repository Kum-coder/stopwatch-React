import { useState,useRef } from "react";


function App() {
  const [time,settime] = useState(0);
  let timeref = useRef(null);
  
  function start(){
    timeref.current=setInterval(()=>settime(time=>time+1),10);}
    function stop(){
      clearInterval(timeref.current);
      timeref.current=null;
    }


  
  return (
    <div>
      <p>stopwatch:{time} seconds</p>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  )
}

export default App