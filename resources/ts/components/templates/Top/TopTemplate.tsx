export const TopTemplate = ({ footer, children }) => {
    return (
        <div>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    );
};
