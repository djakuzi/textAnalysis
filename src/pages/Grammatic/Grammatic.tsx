import { useState } from 'react';
// import { KEY } from '../../helper/key';
import AnalysTextarea from '../../сomponents/AnalysTextarea/AnalysTextarea';
import Button from '../../сomponents/Button/Button';
import styles from './Grammatic.module.css';


export default function Grammatic(){

    const [buttonValid, setButtonValid] = useState<boolean>(false)
    const [key, setKey] = useState<string>('')  // KEY or ''
    const [value, setValue] = useState<string>('')

    const correct = async () =>{

        if(value != ''){

            let response = await fetch(`https://api.textgears.com/correct?text=${value}&language=ru-RU`, {
                method: 'GET',
                headers:{
                    "Authorization": "Basic WUfcuy1KqLvLu4xU",
                    "Content-Type": "application/json; charset=utf-8",
                }
             })
             
            let res = await response.json()
            setValue(res.response.corrected)
            setButtonValid(true)
            console.log(res.response.corrected)
        } 
    }
 
    const change = (text:string) =>{
        setValue(text)
        setButtonValid(false)
    }


    return <div className={styles["main"]}>

        <div className={styles["buttons"]}>
            <Button className={styles['check']} onPointerDown={ () => correct()} > {(buttonValid) ? 'завершено': "начать"} </Button>
            <input className={styles['key']}  placeholder='ключ' value={key} onChange={ event => setKey(event.target.value)}></input>    
        </div>

        <div className={styles["container"]}><AnalysTextarea value={value} onChange={ event => change(event.target.value) } className={styles['textarea']}  placeholder='Напечатайте или вставьте сюда ваш текст'/></div>

        <div className={styles['instruction']}>
            <h1 className={styles["txt"]}>Инструкция</h1>
            <p className={styles["p"]}>
                *Без текста, автокоррeкция не работает!<br />
                *Автокоррекция исправляет пунктационные и грамматические ошибки на русском языке.<br />
            <br />
            *Если в поле "ключ" пусто, то:<br />
            1)<a className={styles['site']} href='https://us.textgears.com/ru/user'>Заходите на сайт;</a><br />
            2)Регистрируетесь; <br />
            4)Заходите в аккаунт;<br />
            3)Копируете свой ключ API; <br />
            4)Вставляете API в поле ключ;<br />
            5)Пишите свой текст;<br />
            6)Нажимаете на кнопку "начать";<br />
            7)Ждете коррекцию.<br />
            </p>
        </div>
    </div>
}