export const Loading = () => {
    return (
        <div className="flex justify-center items-start min-h-screen pt-20">
            <div className="flex flex-col items-center">
                <p className="text-gray-500">Loading...</p>
                <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent mt-2"></div>
            </div>
        </div>
    );
};
