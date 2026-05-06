import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiMicrophoneOff } from "react-icons/ci";
import styles from './searchBox.module.scss'
import ErrorValue from "../errorAlert/ErrorValue";

const SearchBox = () => {

  const [micOn, setMicOn] = useState<boolean>(false)

  const [searchCity, setSearchCity] = useState<string>('Tokyo')
  const [showError, setShowError] = useState<boolean>(false)

  const changeShowError = () => {
    setShowError(false)
  }

  function handleSearchData() {
    if(searchCity !== "") {
       setShowError(true)
    }
  }




  return (
    <>

    <section className={styles.climate_area}>
      <div className={styles.search_tools}>
        <input onChange={(e) : void => setSearchCity(e.target.value)} type="text" placeholder={searchCity}/>
        <button className={styles.mic_btn} onClick={() : void => setMicOn(!micOn)}>{micOn ? <CiMicrophoneOn size={30} /> : <CiMicrophoneOff size={30} />}</button>
      </div>

      <section>
        <div>
          <h3>Tokyo</h3>
          <div>13°C</div>
        </div>
      </section>

      <button className={styles.search_btn} onClick={handleSearchData}>Buscar</button>

      {showError ? <ErrorValue closeError={changeShowError} /> : ''}


    </section>
    </>
  )
}

export default SearchBox