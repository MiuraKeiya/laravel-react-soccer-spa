import { GamesTitle } from "./GamesTitle";
import { Loading } from "./Loading";
import { formatDatePart } from "../../../../functions/Utils";
import { formatDate } from "../../../../functions/Utils";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Games = ({
    games,
    setPage,
    lastPage,
    currentPage,
    paginateLoading,
}) => {
    const handlePaginateClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <div className="bg-[#111931] rounded-t mt-2">
                <GamesTitle games={games} paginateLoading={paginateLoading} />
            </div>
            {paginateLoading ? (
                <Loading />
            ) : (
                games.map((game, index) => (
                    <div key={index}>
                        <div className="flex justify-between mt-3">
                            <div className="flex space-x-1">
                                <p className="text-[#EEEEEE] font-bold">
                                    {formatDatePart(
                                        game.json_detail.fixture.date
                                    )}
                                </p>
                                <p className="text-[#EEEEEE]">
                                    {formatDate(game.json_detail.fixture.date)}
                                </p>
                            </div>
                            <p className="text-[#EEEEEE]">
                                {game.json_detail.fixture.status.long}
                            </p>
                        </div>
                        <div className="flex bg-[#1d2233] mt-1 justify-center h-[3.25rem] hover:bg-[#3d4e81] cursor-pointer transition duration-500">
                            <div className="flex items-center w-52 justify-end space-x-6">
                                <p className="text-white text-[15px]">
                                    {game.json_detail.teams.home.name}
                                </p>
                                <img
                                    src={game.json_detail.teams.home.logo}
                                    alt="league"
                                    className="h-10 w10"
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
                            <div className="flex items-center w-52 space-x-6">
                                <img
                                    src={game.json_detail.teams.away.logo}
                                    alt="league"
                                    className="h-11 w-11"
                                />
                                <p className="text-white text-[15px]">
                                    {game.json_detail.teams.away.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            )}
            <div className="text-center mt-6">
                {currentPage !== lastPage && (
                    <Button
                        variant="outlined"
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={handlePaginateClick}
                    >
                        更に試合を表示する
                    </Button>
                )}
            </div>
        </div>
    );
};
