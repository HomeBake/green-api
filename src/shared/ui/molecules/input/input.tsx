import { InputHTMLAttributes, ReactNode } from "react"

type Props = {
    leftItem: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({leftItem, ...rest}: Props) => {
    return <><input {...rest} /></>
}