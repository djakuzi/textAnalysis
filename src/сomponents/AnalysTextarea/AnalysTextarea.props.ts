import { ReactNode, TextareaHTMLAttributes } from "react";

export interface AnalysTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    children?: ReactNode;

}