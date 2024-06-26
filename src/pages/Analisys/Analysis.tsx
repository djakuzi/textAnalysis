import { useState } from 'react';
import AnalysTextarea from '../../сomponents/AnalysTextarea/AnalysTextarea';
import Button from '../../сomponents/Button/Button';
import styles from './Analysis.module.css';

function getPoint(value:string):number{

    let count = 0

    function check():any{
        count+= 1
    }
    
    value.replace(/[.?!,]/gi, check)

    return count
}
function getLetter(value:string):number{

    let count = 0

    function check():any{
        count+= 1
    }
    
    value.replace(/\p{Alpha}/giu, check)

    return count
}

function getSentence(value:string):number{

    let count = 0

    function check():any{
        count+= 1
    }
    
    value.replace(/\p{Alpha}[.!?]/giu, check)

    return count
}

function getWord(value:string):number{


     let res = value.split(/\p{Alpha}[.!?\s]/gi).map( el => {

        let q = 1
        
        function test():any{
            q+=1
        }

        el.replace(/ /gi, test)

        return +q
     }).reduce( (acc, el)=> acc= acc + el, 0)


    return res

}

export default function Analysis(){

    const [value, setValue] = useState<string>('')

    const [word, setWord] = useState<number>(0)
    const [sentence, setSentence] = useState<number>(0)
    const [letter, setLetter] = useState<number>(0)
    const [point, setPoint] = useState<number>(0)

    const analysis = () => {

        setPoint(getPoint(value))
        setLetter(getLetter(value))
        setSentence(getSentence(value))
        setWord(getWord(value))
    }

    return <div className={styles["main"]}>

        <div className={styles["container"]}><AnalysTextarea onChange={ e => setValue(e.target.value)} className={styles['textarea']} placeholder='Напечатайте или вставьте сюда ваш текст' /></div>

        <div className={styles['counter']}>
           
            <div className={styles['box']}>
                <h1 className={styles['txt']}>Количество слов <h1 className={styles['txt1']} > {word} </h1> </h1>
                <h1 className={styles['txt']}>Количество предложений <h1 className={styles['txt1']} > {sentence} </h1> </h1>
                <hr className={styles['hr']}/>
                <h1 className={styles['txt']}>Количество букв <h1 className={styles['txt1']} > {letter} </h1> </h1>
                <h1 className={styles['txt']}>Количество знаков препинания <h1 className={styles['txt1']} > {point} </h1> </h1>
            </div>

            <Button onPointerDown={ ()=> analysis()} className={styles['check']}> анализ</Button>
         
        </div>
    </div>
}