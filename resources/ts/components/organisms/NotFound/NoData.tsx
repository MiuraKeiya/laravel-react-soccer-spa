import { SeasonSelecter } from "../../molecules/SeasonSelecter";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const NoData = ({ season, name, id, url }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
    };

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
                <div className="text-center mt-6">
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={handleHomeClick}
                    >
                        ホームへ戻る
                    </Button>
                </div>
            </div>
        </div>
    );
};
