// import {useRef} from "react";

import { useRef } from "react";

// export default function Focus(){
//     const initRef = useRef(null)
//     const handleClick=()=>{
//         initRef.current.focus()
//     }

//     return(
//         <div>
//             <input type="text" ref={initRef}/>
//             <button onClick={handleClick}>Focus</button>
//         </div>
//     )

// }

function UseRefence({ ref }) {
  return <input ref={ref} />
}

export default function Focus() {
  const initRef = useRef(null);

  const handleClick = () => {
    initRef.current.focus();
  };

  return (
    <>
      <UseRefence ref={initRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
