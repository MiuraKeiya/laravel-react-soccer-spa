export const PlayerTemplate = ({
    header,
    footer,
    sidebar,
    children,
    scrollTopButton,
}) => {
    return (
        <div className="bg-black">
            <header>{header}</header>
            <aside>{sidebar}</aside>
            <main className="min-h-screen container mx-auto">{children}</main>
            <footer>{footer}</footer>
            <div className="fixed right-[20px] bottom-[20px]">
                {scrollTopButton}
            </div>
        </div>
    );
};
