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

  
  const [city, setCity] = useState<string | null> (null)
  const [temp, setTemp] = useState<number>(11.57)
  

  const callData = async ()=> {
    if(!searchCity.trim()) {return alert('Campo vazio')}
     else {
       const request = await fetch(`buscar a url do openWeather depois`)
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
          <h3>{city}</h3>
          <div>{temp}°C</div>
        </div>
      </section>

      <button onClick={callData} className={styles.search_btn}>Buscar</button>

      {showError ? <ErrorValue closeError={changeShowError} /> : ''}


    </section>
    </>
  )
}

export default SearchBox