import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Typography = ({ children }: Props) => {
    return <p>{children}</p>
}