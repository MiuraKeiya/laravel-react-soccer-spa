import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { Loading } from "../atoms/Loading";

export const Result = () => {
    const { result, error } = useContext(MatchDetailsContext);
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");

        return `${year}.${month}.${day}.${hours}:${minutes}`;
    };

    if (result.length === 0) {
        return <Loading />;
    }

    return (
        <div>
            {result &&
                result.response.map((match, index) => (
                    <div key={index}>
                        <div className="flex items-center h-[36px] text-[12px] font-bold ml-2 text-[#FFFFFF]">
                            <img
                                src={match.league.flag}
                                className="w-4 h-4 m-1"
                            />
                            <div className="uppercase">{match.league.country}</div>
                            <div className="p-1">-</div>
                            <div className="uppercase">{match.league.name}</div>
                            <div className="p-1">-</div>
                            <div>第{match.league.round.match(/\d+/)}節</div>
                        </div>
                        <div className="border-b border-[#111931]"></div>
                        <div className="flex justify-between items-center h-[165px]">
                            <div className="flex flex-col items-center w-[244px]">
                                <img
                                    src={`https://media-2.api-sports.io/football/teams/${match.teams.home.id}.png`}
                                    className="w-[3.625rem] h-[3.625rem] m-1"
                                />
                                <a className="text-[16px] text-[#FFFFFF] font-extrabold">
                                    {match.teams.home.name}
                                </a>
                            </div>
                            <div className="flex flex-col items-center w-[180px]">
                                <div className="text-[12px] h-[15.5px] text-[#C8CDCD]">
                                    {formatDate(match.fixture.date)}
                                </div>
                                <div className="flex font-custom h-[55px] text-[#FFFFFF]">
                                    <div className="text-[46px]">
                                        {match.score.fulltime.home}
                                    </div>
                                    <div className="text-[46px]">-</div>
                                    <div className="text-[46px]">
                                        {match.score.fulltime.away}
                                    </div>
                                </div>
                                <div className="text-[12px] font-bold pt-1 pb-2 text-[#FFFFFF]">
                                    {match.fixture.status.long ===
                                    "Match Finished"
                                        ? "試合終了"
                                        : match.fixture.status.long}
                                </div>
                                <div className="inline-block border rounded bg-[#eee]">
                                    <div className="px-1 text-[10px]">
                                        スタジアム : {match.fixture.venue.name}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-[244px]">
                                <img
                                    src={`https://media-2.api-sports.io/football/teams/${match.teams.away.id}.png`}
                                    className="w-[3.625rem] h-[3.625rem] m-1"
                                />
                                <a className="text-[16px] text-[#FFFFFF] font-extrabold">
                                    {match.teams.away.name}
                                </a>
                            </div>
                        </div>
                        <div className="border-b border-[#111931]"></div>
                    </div>
                ))}
        </div>
    );
};
