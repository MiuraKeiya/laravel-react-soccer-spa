import { SeasonSelecter } from "../../molecules/SeasonSelecter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const NoData = ({ season, name, id, url }) => {
    return (
        <div className="text-[#C8CDCD] font-semibold flex justify-center items-center mt-12 bg-[#1d2233] rounded-md">
            <div className="mb-8">
                <div className="flex items-center">
                    <p>
                        {season}シーズンの{name}データは存在しません。
                    </p>
                    <SeasonSelecter baseRoute={url} id={id} season={season} />
                </div>
                <div className="flex space-x-2 mt-3">
                    <HelpOutlineIcon />
                    <p>
                        シーズンを切り替えてもデータが表示されない場合は、
                        <br />
                        URLにタイプミスなどがないかご確認ください。
                    </p>
                </div>
            </div>
        </div>
    );
};
