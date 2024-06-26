import { Link } from 'react-router-dom'
import styles from './Error.module.css'


export default function Error(){
    return <>
    <div className={styles['error']}>Путь, является не верным <Link to='/' className={styles['link']}>ТЫКНИ</Link></div>
    </>
}