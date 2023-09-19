export const HomeTemplate = ({ header, footer, sidebar, children }) => {
    return (
        <div className="bg-black">
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main className="min-h-screen container mx-auto">{children}</main>
            <footer>{footer}</footer>
        </div>
    );
};
