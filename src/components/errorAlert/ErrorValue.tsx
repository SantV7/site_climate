import styles from './errorAlert.module.scss'
import { IoIosClose } from "react-icons/io";


interface ErrorValueProps {
    closeError: () => void

}


const ErrorValue = ({closeError} : ErrorValueProps) => {

  
  return (
    <>
    <div className={styles.string_alert}>
        <header className={styles.close_area}>
            <div></div>
            <IoIosClose onClick={closeError} style={{cursor: 'pointer'}} size={55}/>
        </header>
        <h1>É necessário escrever uma cidade</h1>
    
    </div>
    </>
  )
}

export default ErrorValue