import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
    return (
        <div className="bg-[#111931] flex justify-center min-h-screen">
            <div className="flex flex-col items-center space-y-3 mt-[8rem]">
                <CircularProgress color="secondary" />
            </div>
        </div>
    );
};
