import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StandingLoading } from "./Loading/StandingLoading";
import { useStandingsApi } from "../../../hooks/useStandingsApi";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Page } from "../../../Page";
import { imageUrl } from "../../../functions/Utils";

export const LatestGame = ({ season }) => {
    // 選択されたリーグIDを保持するステート
    const [selectedLeague, setSelectedLeague] = useState(39);

    // フォームの切り替え状態フラグ
    const [selectedForm, setSelectedForm] = useState(false);

    const navigate = useNavigate();

    // APIを叩いて順位一覧を取得
    const { standings, loading, error } = useStandingsApi(
        selectedLeague,
        season
    );

    // 選択されたリーグIDでステートを更新
    const handleLeagueChange = (e) => {
        const newLeagueId = e.target.value;
        setSelectedLeague(newLeagueId);
    };

    // フォームの表示状態を切り替える
    const handleFormClick = () => {
        setSelectedForm(!selectedForm);
    };

    // 順位一覧ページへ遷移
    const handleClick = (leagueId, season) => {
        navigate(`/standings/league/${leagueId}/season/${season}`);
    };

    // チーム詳細ページへ遷移
    const handleTeamClick = (teamId, season) => {
        navigate(`/team/${teamId}/season/${season}`);
    };

    return (
        <Page error={error}>
            <div className="mx-3 py-3">
                <div className="mb-3 flex items-center space-x-1">
                    <span className="text-[#efdf54]">
                        <EmojiEventsIcon />
                    </span>
                    <h1 className="text-[#eeeeee] font-bold">リーグ順位表</h1>
                </div>
                {loading ? (
                    <StandingLoading />
                ) : (
                    <>
                        <div className="border-b border-gray-500 pb-3">
                            <select
                                id="leagueSelector"
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
                            <button
                                className={`text-sm font-semibold rounded-lg p-[0.45rem] ml-6 ${
                                    selectedForm
                                        ? "text-[#7A84FF] bg-[#7A84FF] bg-opacity-20 transition-all duration-300"
                                        : "bg-[#10161c] hover:bg-[#7A84FF] hover:bg-opacity-20 text-gray-300 transition duration-300"
                                } hover:bg-hover focus:outline-none`}
                                onClick={handleFormClick}
                            >
                                フォーム
                            </button>
                        </div>
                        <div className="mt-3">
                            <table className="w-full">
                                <thead className="bg-[#111931] text-[#C8CDCD] text-[12px] font-bold">
                                    <tr>
                                        <th className="w-[2.5rem]">#</th>
                                        <th className="text-left">チーム</th>
                                        {!selectedForm ? (
                                            <>
                                                <th className="w-[3rem]">MP</th>
                                                <th className="w-[3rem]">W</th>
                                                <th className="w-[3rem]">D</th>
                                                <th className="w-[3rem]">L</th>
                                            </>
                                        ) : (
                                            <th className="w-[12rem]">
                                                フォーム
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="text-[#C8CDCD]">
                                    {standings.all &&
                                        Object.values(standings.all)
                                            .slice(0, 10)
                                            .map((standing, index) => (
                                                <tr
                                                    key={index}
                                                    className={
                                                        "border-b border-[#111931] text-center h-[3.4375rem] hover:bg-[#3d4e81] cursor-pointer transition duration-300"
                                                    }
                                                    onClick={() =>
                                                        handleTeamClick(
                                                            standing.team.id,
                                                            season
                                                        )
                                                    }
                                                >
                                                    <td>
                                                        <div
                                                            className={`rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center font-semibold ${
                                                                standing.description ===
                                                                "Promotion - Champions League (Group Stage: )"
                                                                    ? "bg-[#81319c] text-black"
                                                                    : standing.description ===
                                                                      "Promotion - Europa League (Group Stage: )"
                                                                    ? "bg-[#276e8d] text-black"
                                                                    : standing.description ===
                                                                      "Promotion - Europa Conference League (Qualification: )"
                                                                    ? "bg-[#787822] text-black"
                                                                    : standing.description ===
                                                                      "Relegation - Championship"
                                                                    ? "bg-[#a62b1b] text-black"
                                                                    : standing.description ===
                                                                      "Promotion - Champions League (Qualification: )"
                                                                    ? "bg-blue-600 text-black"
                                                                    : standing.description ===
                                                                      "Relegation - Ligue 2"
                                                                    ? "bg-[#a62b1b] text-black"
                                                                    : standing.description ===
                                                                      "Promotion - Europa Conference League (Group Stage: )"
                                                                    ? "bg-green-600 text-black"
                                                                    : standing.description ===
                                                                      "Bundesliga (Relegation)"
                                                                    ? "bg-gray-500 text-black"
                                                                    : standing.description ===
                                                                      "Relegation - 2. Bundesliga"
                                                                    ? "bg-[#a62b1b] text-black"
                                                                    : standing.description ===
                                                                      "Serie A (Additional match: )"
                                                                    ? "bg-gray-500 text-black"
                                                                    : standing.description ===
                                                                      "Relegation - Serie B"
                                                                    ? "bg-[#a62b1b] text-black"
                                                                    : standing.description ===
                                                                      "Relegation - LaLiga2"
                                                                    ? "bg-[#a62b1b] text-black"
                                                                    : standing.description ===
                                                                      "Ligue 1 (Promotion - Play Offs: )"
                                                                    ? "bg-gray-500 text-black"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {standing.rank}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center space-x-2">
                                                            <img
                                                                src={imageUrl(
                                                                    "teams",
                                                                    standing
                                                                        .team
                                                                        .id,
                                                                    "png"
                                                                )}
                                                                className="lg:w-7 lg:h-7"
                                                            />
                                                            <p className="text-[#EEEEEE] w-[8rem] truncate text-left text-[15px]">
                                                                {
                                                                    standing
                                                                        .team
                                                                        .name
                                                                }
                                                            </p>
                                                        </div>
                                                    </td>
                                                    {!selectedForm ? (
                                                        <>
                                                            <td className="text-[16px]">
                                                                {
                                                                    standing.all
                                                                        .played
                                                                }
                                                            </td>
                                                            <td className="text-[16px]">
                                                                {
                                                                    standing.all
                                                                        .win
                                                                }
                                                            </td>
                                                            <td className="text-[16px]">
                                                                {
                                                                    standing.all
                                                                        .draw
                                                                }
                                                            </td>
                                                            <td className="text-[16px]">
                                                                {
                                                                    standing.all
                                                                        .lose
                                                                }
                                                            </td>
                                                        </>
                                                    ) : (
                                                        <td className="text-[16px]">
                                                            <div className="flex justify-center">
                                                                {standing.form !==
                                                                    null &&
                                                                    standing.form
                                                                        .split(
                                                                            ""
                                                                        )
                                                                        .map(
                                                                            (
                                                                                char,
                                                                                index
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className="flex items-center justify-center h-5 w-5 sm:mx-[1px]"
                                                                                >
                                                                                    <span
                                                                                        className={`text-black font-semibold h-full w-full flex items-center justify-center ${
                                                                                            char ===
                                                                                            "W"
                                                                                                ? "bg-[#44C486]"
                                                                                                : char ===
                                                                                                  "D"
                                                                                                ? "bg-[#9198AC]"
                                                                                                : char ===
                                                                                                  "L"
                                                                                                ? "bg-[#E66F5D]"
                                                                                                : ""
                                                                                        }`}
                                                                                    >
                                                                                        {
                                                                                            char
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            )
                                                                        )}
                                                            </div>
                                                        </td>
                                                    )}
                                                </tr>
                                            ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-2 flex justify-end">
                            <p
                                className="text-[#7A84FF] font-semibold text-[14px] hover:underline cursor-pointer"
                                onClick={() =>
                                    handleClick(selectedLeague, season)
                                }
                            >
                                全ての順位
                            </p>
                        </div>
                    </>
                )}
            </div>
        </Page>
    );
};
