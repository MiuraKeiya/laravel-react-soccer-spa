import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    style: string;
    onClick: () => void;
};

export const Button = ({ children, style, onClick }: Props) => {
    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    );
};
