export const GamesTemplate = ({ header, footer, sidebar, children }) => {
    return (
        <div>
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main className="bg-[#1d2233]">{children}</main>
            <footer>{footer}</footer>
        </div>
    );
};
