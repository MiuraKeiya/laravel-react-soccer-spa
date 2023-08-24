type Props = {
    label: string;
    style: string;
    onClick: () => void;
};

export const Button = ({ label, style, onClick }: Props) => {
    return (
        <button className={style} onClick={onClick}>
            {label}
        </button>
    );
};
