import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const HomeInformations = () => {
    return (
        <div className="bg-gradient-to-r from-[#1d2233] rounded">
            <div className="h-[5rem] flex items-center ml-5 text-white space-x-1">
                <SportsSoccerIcon />
                <h1 className=" font-bold text-[20px]">シーズン試合一覧</h1>
            </div>
        </div>
    );
};
