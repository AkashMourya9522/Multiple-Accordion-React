import { useState } from "react"
import { data } from "./data"

function App() {
  
  const [multiple,setMultiple] = useState([])
  

  function handleMultiSelection(id){

    if(multiple.includes(id)){
       let newArr = multiple.filter((ele)=> ele!==id)
      setMultiple(newArr)
    }
    else{
      setMultiple([...multiple,id])
    }
  }

  return (
    <div className="bg-black text-white h-screen  flex flex-col items-center gap-5">
      <h1 className="text-5xl">Accordion</h1>
      {
        data.map((d)=><div className="bg-slate-500 w-96 text-lg " onClick={()=>handleMultiSelection(d.id)}>
          <div className="bg-red-700 flex justify-around">
          <h1 className="inline bg-orange-400"> {d.title} </h1>
          <p className="inline bg-blue-500">+</p>
          </div>
          

          {
            multiple.map((id)=> id===d.id ? <div className="bg-slate-700">
              {d.content}
            </div> : <div></div> )
          }
          
        </div>)
      }
    </div>
  )
}

export default App