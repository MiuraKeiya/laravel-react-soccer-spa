type Props = {
    label: string;
    className: string;
};

export const Button = ({ label, className }: Props) => {
    return <button className={className}>{label}</button>;
};
