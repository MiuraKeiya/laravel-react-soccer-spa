export const TopTemplate = ({ footer, children }) => {
    return (
        <div>
            <main>{children}</main>
            <footer className="invisible lg:visible absolute bottom-0 w-full">
                {footer}
            </footer>
        </div>
    );
};
