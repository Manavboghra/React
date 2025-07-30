import SearchButton from "./Searchbutton"
import SearchInput from "./SearchInput"
import {useRef} from "react"

export default function Page() {
  const initRef = useRef(null)
  const handleClick = ()=>{
    initRef.current.focus()
  }
  return (
    <>
      <nav>
        <SearchButton handleClick={handleClick}/>
      </nav>
      <SearchInput ref={initRef} />
    </>
  );
}
