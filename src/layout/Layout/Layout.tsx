import { NavLink, Outlet, useNavigate} from "react-router-dom";
import styles from './Layout.module.css';
import cn from 'classnames';
import { useEffect, useState } from "react";
import Button from "../../сomponents/Button/Button";

 export default function Layout(){

    const [classLink, setClassLink] = useState<string>('sidebar')
    const navigate = useNavigate()

    useEffect(()=>{
        navigate('/analysis')
    },[])

// "sidebar"
    return  <div className={styles["screen"]}>

        <div className={styles["menu"]} onPointerDown={() => setClassLink('open')}>МЕНЮ</div>
        <div className={styles[classLink]}> 

            <NavLink onClick={()=> setClassLink('sidebar')} to='/analysis' className={ ({isActive}) => cn(styles['link'],{
                    [styles.active]: isActive,
                })} >
                Анализ текста
            </NavLink>

            <NavLink onClick={()=> setClassLink('sidebar')} to='/grammatic' className={ ({isActive}) => cn(styles['link'],{
                    [styles.active]: isActive,
                })}>
                Автокоррекция текста
            </NavLink>

            <Button className={styles["close"]} onPointerDown={() => setClassLink('sidebar')}>закрыть</Button>
            
        </div>

        <div className="outlet">
            <Outlet></Outlet>
        </div>

    </div>
    
}