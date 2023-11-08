import { SeasonSelecter } from "../../molecules/SeasonSelecter";
import BarChartIcon from "@mui/icons-material/BarChart";

export const StatisticTitle = ({ season, id }) => {
    return (
        <div className="bg-[#111931] text-[#EEEEEE] sm:text-[18px] font-bold rounded flex space-x-2 items-center h-[3.5rem] justify-between">
            <div className="flex items-center space-x-2 ml-2">
                <BarChartIcon />
                <h1>統計</h1>
                <span>
                    シーズン{season} - {parseInt(season) + 1}
                </span>
            </div>
            <div className="ml-3">
                <SeasonSelecter baseRoute={"/player"} id={id} season={season} />
            </div>
        </div>
    );
};
