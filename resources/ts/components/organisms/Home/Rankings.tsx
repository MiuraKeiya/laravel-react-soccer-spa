import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RankingsLoading } from "./Loading/RankingsLoading";
import { useRankingsApi } from "../../../hooks/useRankingsApi";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Page } from "../../../Page";
import { imageUrl } from "../../../functions/Utils";

export const Rankings = ({ season }) => {
    // 選択されたリーグIDを保持するステート
    const [selectedLeague, setSelectedLeague] = useState(39);

    const navigate = useNavigate();

    const [rankings, rankingsLoading, rankingsError] = useRankingsApi(
        selectedLeague,
        season
    );

    const handleLeagueChange = (e) => {
        const newLeagueId = e.target.value;
        setSelectedLeague(newLeagueId);
    };

    // 選手詳細ページへ遷移
    const handleClick = (playerId, season) => {
        navigate(`/player/${playerId}/season/${season}`);
    };

    return (
        <Page error={rankingsError}>
            <div className="mx-3 py-3">
                <div className="mb-3 flex items-center space-x-1">
                    <span className="text-[#54ef59]">
                        <SportsSoccerIcon />
                    </span>
                    <h1 className="text-[#eeeeee] font-bold">得点ランキング</h1>
                </div>
                {rankingsLoading ? (
                    <RankingsLoading />
                ) : (
                    <>
                        <div className="border-b border-gray-500 pb-3">
                            <select
                                id="leaguesSelector"
                                onChange={handleLeagueChange}
                                value={selectedLeague}
                                className="bg-[#10161c] text-gray-300 text-sm font-semibold rounded-lg p-2 focus:outline-none focus:ring-0"
                            >
                                <option value="39">Premier League</option>
                                <option value="140">La Liga</option>
                                <option value="78">Bundesliga</option>
                                <option value="135">Serie A</option>
                                <option value="61">Ligue 1</option>
                            </select>
                        </div>
                        <div className="text-[12px] text-[#C8CDCD] flex items-center space-x-2 bg-[#10161c] rounded-lg py-2 px-2 mt-3">
                            <p>
                                <InfoOutlinedIcon />
                            </p>
                            <p>
                                得点数が同じ選手は、出場時間の合計などその他の要素を考慮して順位を決めています。
                            </p>
                        </div>
                        <div className="mt-3 mb-1">
                            {rankings[0]?.json_scorer?.response?.length > 0 ? (
                                <table className="w-full">
                                    <thead className="bg-[#111931] text-[#C8CDCD] text-[12px]">
                                        <tr>
                                            <th className="w-[2.5rem]">#</th>
                                            <th className="text-left">選手</th>
                                            <th></th>
                                            <th className="w-[3rem]">得点</th>
                                        </tr>
                                    </thead>
                                    {rankings[0]?.json_scorer?.response
                                        ?.slice(0, 10)
                                        .map((scorer, index) => (
                                            <tbody
                                                className="text-[#EEEEEE]"
                                                key={index}
                                            >
                                                <tr
                                                    className="border-b border-[#111931] text-center h-[3.4375rem] hover:bg-[#3d4e81] cursor-pointer transition duration-300"
                                                    onClick={() =>
                                                        handleClick(
                                                            scorer.player.id,
                                                            season
                                                        )
                                                    }
                                                >
                                                    <td className="font-semibold text-[#C8CDCD]">
                                                        {index + 1}
                                                    </td>
                                                    <td className="">
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src={imageUrl(
                                                                    "players",
                                                                    scorer
                                                                        .player
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="text-[14px]">
                                                        <p className="text-left">
                                                            {scorer.player.name}
                                                        </p>
                                                        <div className="flex items-center space-x-1">
                                                            <img
                                                                src={imageUrl(
                                                                    "teams",
                                                                    scorer
                                                                        .statistics[0]
                                                                        .team
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="w-5 h-5"
                                                            />
                                                            <p className="text-[#C8CDCD] text-[12px]">
                                                                {
                                                                    scorer
                                                                        .statistics[0]
                                                                        .team
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        {
                                                            scorer.statistics[0]
                                                                .goals.total
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                </table>
                            ) : (
                                // json_scorerキーが存在しない場合に表示するコード
                                <div className="flex justify-center py-[10rem]">
                                    <p className="text-[#8c9191] text-[16px] font-bold">
                                        現在データは存在しません。
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Page>
    );
};
