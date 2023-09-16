export const PlayerTemplate = ({ header, footer, sidebar, children }) => {
    return (
        <div className="bg-black">
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main className="container mx-auto">{children}</main>
            <footer>{footer}</footer>
        </div>
    );
};
