import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { imageUrl } from "../../../functions/Utils";

export const StandingLeagues = ({
    leagues,
    loading,
    maxSeason,
    toggleSidebar,
}) => {
    const navigate = useNavigate();

    const handleStandingClick = (id, season) => {
        toggleSidebar();
        navigate(`/standings/league/${id}/season/${season}`);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                leagues.map((league, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between hover:underline cursor-pointer"
                        onClick={() =>
                            handleStandingClick(league.id, maxSeason)
                        }
                    >
                        <div className="flex items-center space-x-1">
                            <img
                                src={imageUrl("leagues", league.id, "png")}
                                alt="LeagueLogo"
                                className="h-5 w-5 bg-white border border-white rounded-md"
                            />
                            <span className="text-white text-opacity-80 my-1 font-semibold text-[15px]">
                                {league.name}
                            </span>
                        </div>
                        <Tooltip
                            title={"順位表を見る！"}
                            placement="right"
                            arrow={true}
                        >
                            <IconButton
                                sx={{
                                    color: "#7A84FF",
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
