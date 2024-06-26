import { AnalysTextareaProps } from "./AnalysTextarea.props";


export default function AnalysTextarea({className, ...props}:AnalysTextareaProps){

    return <textarea  {...props} className={className} name="" id="" cols={10} rows={10}></textarea>
}