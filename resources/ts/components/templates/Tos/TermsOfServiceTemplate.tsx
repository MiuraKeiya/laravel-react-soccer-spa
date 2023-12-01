export const TermsOfServiceTemplate = ({ header, footer, children }) => {
    return (
        <div className="bg-[#10161c]">
            <header>{header}</header>
            <main className="min-h-screen container mx-auto my-6">
                {children}
            </main>
            <footer>{footer}</footer>
        </div>
    );
};
