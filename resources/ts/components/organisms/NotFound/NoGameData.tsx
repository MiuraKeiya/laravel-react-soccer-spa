import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const NoGameData = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
    };

    return (
        <div className="text-[#C8CDCD] font-semibold flex justify-center items-center bg-[#1d2233] rounded-md">
            <div className="my-8">
                <div className="flex items-center">
                    <p>試合データが存在しません。</p>
                </div>
                <div className="flex space-x-2 mt-3">
                    <HelpOutlineIcon />
                    <p>URLにタイプミスなどがないかご確認ください。</p>
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
