type Props = {
    text: string;
    className: string;
};

export const LinkButton = ({ text, className }: Props) => {
    return (
        <a className={className}>
            {text}
        </a>
    );
};
