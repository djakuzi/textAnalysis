import { NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css';
import cn from 'classnames';
import { useState } from "react";
import Button from "../../сomponents/Button/Button";

 export default function Layout(){

    const [classLink, setClassLink] = useState<string>('sidebar')

// "sidebar"
    return  <div className={styles["screen"]}>

        <div className={styles["menu"]} onPointerDown={() => setClassLink('open')}>МЕНЮ</div>
        <div className={styles[classLink]}> 

            <NavLink onClick={()=> setClassLink('sidebar')} to='/main/analysis' className={ ({isActive}) => cn(styles['link'],{
                    [styles.active]: isActive,
                })} >
                Анализ текста
            </NavLink>

            <NavLink onClick={()=> setClassLink('sidebar')} to='/main/grammatic' className={ ({isActive}) => cn(styles['link'],{
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