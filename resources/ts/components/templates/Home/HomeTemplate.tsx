export const HomeTemplate = ({ header, footer, children }) => {
    return (
        <div>
            <header>{header}</header>
            <div className="flex">
                <aside className="w-1/4 bg-gray-200">サイドバー</aside>
                <main className="w-3/4 bg-[#1d2233]"> {children}</main>
            </div>
            <footer>{footer}</footer>
        </div>
    );
};
