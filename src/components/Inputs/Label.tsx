import { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    text: string
}

export const Label = ({htmlFor, text, className}: LabelProps) => {
    return <label htmlFor={htmlFor} className={className}>{text}</label>
}