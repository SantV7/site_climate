import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import styles from './searchBox.scss'

const SearchBox = () => {

  const [micOn, setMicOn] = useState<boolean>(false)


  return (
    <>

    <section id="area_input">
      <div className={styles.search_tools}>
        <input type="text" placeholder="Tokyo"/>
        <button onClick={() : void => setMicOn(!micOn)}>{micOn ? <CiMicrophoneOn /> : <CiMicrophoneOff />}</button>


      </div>

    </section>
    
    </>
  )
}

export default SearchBox