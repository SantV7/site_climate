import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import styles from './searchBox.module.scss'

const SearchBox = () => {

  const [micOn, setMicOn] = useState<boolean>(false)


  return (
    <>

    <section className={styles.climate_area}>
      <div className={styles.search_tools}>
        <input type="text" placeholder="Tokyo"/>
        <button className={styles.mic_btn} onClick={() : void => setMicOn(!micOn)}>{micOn ? <CiMicrophoneOn size={30} /> : <CiMicrophoneOff size={30} />}</button>
      </div>
    </section>
    
    </>
  )
}

export default SearchBox