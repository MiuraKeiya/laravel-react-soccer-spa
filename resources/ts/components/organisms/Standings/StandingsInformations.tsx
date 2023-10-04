import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const StandingsInformations = () => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded h-[5rem] flex items-center">
            <div className="flex items-center ml-6 space-x-3">
                <EmojiEventsIcon
                    className="text-[#EEEEEE]"
                    sx={{ fontSize: "35px" }}
                />
                <h1 className="text-white font-bold text-[35px]">
                    順位一覧
                </h1>
            </div>
        </div>
    );
};
