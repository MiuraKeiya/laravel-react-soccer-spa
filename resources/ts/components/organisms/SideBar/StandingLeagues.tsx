import { Loading } from "./Loading";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const StandingLeagues = ({ leagues, loading }) => {
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                leagues.map((league, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between hover:underline cursor-pointer"
                    >
                        <div className="flex items-center space-x-1">
                            <img
                                src={`https://media-3.api-sports.io/football/leagues/${league.id}.png`}
                                alt="LeagueLogo"
                                className="h-5 w-5 bg-white border border-white rounded-md"
                            />
                            <span className="my-1">{league.name}</span>
                        </div>
                        <Tooltip
                            title={"順位表を見る！"}
                            placement="right"
                            arrow={true}
                        >
                            <IconButton
                                sx={{
                                    color: "#FFFFFF",
                                }}
                            >
                                <KeyboardDoubleArrowRightIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                ))
            )}
        </div>
    );
};
