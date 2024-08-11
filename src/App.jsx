import { useState } from "react";
import { data } from "./data";

function App() {
  const [multiple, setMultiple] = useState([]);

  function handleMultiSelection(id) {
    if (multiple.includes(id)) {
      let newArr = multiple.filter((ele) => ele !== id);
      setMultiple(newArr);
    } else {
      setMultiple([...multiple, id]);
    }
  }

  return (
    <div className="bg-black text-white h-screen  flex flex-col items-center gap-5">
      <h1 className="text-5xl">Accordion</h1>
      {data.map((d) => (
        <div
          key={d.id}
          className="bg-slate-500 w-96 text-lg hover:cursor-pointer "
          onClick={() => handleMultiSelection(d.id)}
        >
          <div className=" flex justify-around">
            <h1 className="inline "> {d.title} </h1>

            {multiple.includes(d.id) ? <p>-</p> : <p>+</p>}
          </div>

          <div
            className={`transition-all duration-700 ${
              multiple.includes(d.id) ? `h-20` : `h-0`
            }`}
          >
            {
              // multiple.map((id)=> id===d.id ? <div className="bg-slate-700">
              //   {d.content}
              // </div> : <div></div> )
              multiple.includes(d.id) ? (
                <div className="bg-blue-500"> {d.content} </div>
              ) : (
                <div></div>
              )
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
