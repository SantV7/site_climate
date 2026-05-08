import { useEffect, useState } from "react";
import { CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";
import styles from './searchBox.module.scss';
import ErrorValue from "../errorAlert/ErrorValue";

const SearchBox = () => {
  const [micOn, setMicOn] = useState<boolean>(false);
  const [searchCity, setSearchCity] = useState<string>('Tokyo');
  const [showError, setShowError] = useState<boolean>(false);
  const [temp, setTemp] = useState<number | null>(null);

  const keyApi = 'bf9babda0b7e59340e10f1e1dfe80371';

  const changeShowError = () => {
    setShowError(false);
  };

  const callData = async () => {
    if (!searchCity.trim()) return alert('Campo vazio');

    try {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${keyApi}`);
      const data: any = await request.json();

      if (data.cod == 200) {
        setTemp(Math.round(data.main.temp));
        setShowError(false);
      } else {
        setShowError(true);
        setTemp(null);
      }
    } catch (error) {
      console.error(error);
      setShowError(true);
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <>
      <section className={styles.climate_area}>
        <div className={styles.search_tools}>
          <input 
            onChange={(e) => setSearchCity(e.target.value)} 
            type="text" 
            value={searchCity}
            placeholder="Buscar cidade..."
          />
          <button className={styles.mic_btn} onClick={() => setMicOn(!micOn)}>
            {micOn ? <CiMicrophoneOn size={30} /> : <CiMicrophoneOff size={30} />}
          </button>
        </div>

        <section>
          <div>
            <h3>{searchCity}</h3>
            <div>{temp !== null ? `${temp}°C` : "--"}</div>
          </div>
        </section>

        <button onClick={callData} className={styles.search_btn}>Buscar</button>

        {showError && <ErrorValue closeError={changeShowError} />}
      </section>
    </>
  );
};

export default SearchBox;