import { GamesLoading } from "./Loading/GamesLoading";
import { formatDatePart } from "../../../functions/Utils";
import { formatDate } from "../../../functions/Utils";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const LeagueResults = ({
    pagenateGames,
    setPage,
    lastPage,
    currentPage,
    paginateLoading,
}) => {
    const navigate = useNavigate();

    const handleGamesClick = (fixtureId, leagueId, season) => {
        navigate(`/games/${fixtureId}/leagues/${leagueId}/seasons/${season}`);
    };

    const handlePaginateClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="overflow-x-auto">
            <div className="bg-[#111931] text-[#EEEEEE] text-[18px] font-bold py-1 mt-2 rounded">
                <h1 className="ml-3">試合日程・結果</h1>
            </div>
            {paginateLoading ? (
                <GamesLoading />
            ) : (
                pagenateGames.map((game, index) => (
                    <div key={index}>
                        <div className="flex justify-between mt-3">
                            <div className="flex space-x-1">
                                <p className="text-[#EEEEEE] font-bold lg:text-[16px] text-[14px]">
                                    {game.json_detail.league.round ===
                                    "Relegation Round"
                                        ? "降格戦"
                                        : game.json_detail.league.round ===
                                          "Relegation Decider"
                                        ? "追加試合"
                                        : game.json_detail.league.round &&
                                          game.json_detail.league.round.match(
                                              /\d+/
                                          )
                                        ? `第${game.json_detail.league.round.match(
                                              /\d+/
                                          )}節`
                                        : game.json_detail.league.round}{" "}
                                    {formatDatePart(
                                        game.json_detail.fixture.date
                                    )}
                                </p>
                                <p className="text-[#EEEEEE] lg:text-[16px] text-[14px]">
                                    {formatDate(game.json_detail.fixture.date)}
                                </p>
                            </div>
                            <p className="text-[#EEEEEE] lg:text-[16px] text-[14px]">
                                {game.json_detail.fixture.status.long}
                            </p>
                        </div>
                        <div
                            className="flex bg-[#1d2233] mt-1 justify-center h-[3.25rem] hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                            onClick={() =>
                                handleGamesClick(
                                    game.json_detail.fixture.id,
                                    game.json_detail.league.id,
                                    game.json_detail.league.season
                                )
                            }
                        >
                            <div className="flex items-center w-52 justify-end lg:space-x-6 space-x-2">
                                <p className="text-white lg:text-[15px] text-[12px]">
                                    {game.json_detail.teams.home.name}
                                </p>
                                <img
                                    src={game.json_detail.teams.home.logo}
                                    alt="league"
                                    className="lg:h-[40px] lg:w-[40px] h-7 w-7"
                                />
                            </div>
                            <div className="flex items-center space-x-1 mx-6">
                                <div className="w-11 h-12 bg-[#111931] text-center">
                                    <p className="text-[#EEEEEE] font-bold text-[30px]">
                                        {game.json_detail.score.fulltime.home ??
                                            "-"}
                                    </p>
                                </div>
                                <div className="w-11 h-12 bg-[#111931] text-center">
                                    <p className="text-[#EEEEEE] font-bold text-[30px]">
                                        {game.json_detail.score.fulltime.away ??
                                            "-"}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center w-52 lg:space-x-6 space-x-2">
                                <img
                                    src={game.json_detail.teams.away.logo}
                                    alt="league"
                                    className="lg:h-[40px] lg:w-[40px] h-7 w-7"
                                />
                                <p className="text-white lg:text-[15px] text-[12px]">
                                    {game.json_detail.teams.away.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className="text-center mt-6">
                {currentPage !== lastPage && (
                    <LoadingButton
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={handlePaginateClick}
                        loading={paginateLoading}
                        style={{
                            backgroundColor: "#5a67d8",
                            color: paginateLoading ? undefined : "white",
                        }}
                    >
                        更に試合を表示する
                    </LoadingButton>
                )}
            </div>
        </div>
    );
};
