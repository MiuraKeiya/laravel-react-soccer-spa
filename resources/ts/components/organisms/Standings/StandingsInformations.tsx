import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const StandingsInformations = ({ standings }) => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded h-[7rem] flex items-center">
            <div className="flex items-center space-x-3 ml-6">
                <img
                    src={standings.league?.logo}
                    alt="leagueLogo"
                    className="h-12 w-12"
                />
                <h1 className="text-white text-[25px] uppercase font-semibold">
                    {standings.league?.name}
                </h1>
            </div>
            <p className="uppercase font-semibold text-[#C8CDCD] text-[18px] self-start mt-[46px] ml-2">
                {standings.league?.country}
            </p>
        </div>
    );
};
