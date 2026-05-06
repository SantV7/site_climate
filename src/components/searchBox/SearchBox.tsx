import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";

const SearchBox = () => {

  const [micOn, setMicOn] = useState<boolean>(false)


  return (
    <>

    <section id="area_input">
      <div id="search_tools">
        <input type="text" placeholder="Tokyo"/>
        {micOn ? <CiMicrophoneOn /> : <CiMicrophoneOff />}


      </div>

    </section>
    
    </>
  )
}

export default SearchBox