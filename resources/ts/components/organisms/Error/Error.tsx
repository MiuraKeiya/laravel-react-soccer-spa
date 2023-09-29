import { Button } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

export const Error = ({ status }) => {
    return (
        <div className="flex justify-center mt-20 mx-3">
            <div className="text-white">
                <h1 className="text-red-600 text-[20px] mb-2">
                    エラーが発生しました。
                </h1>
                <p>ステータスコード : {status}</p>
                <p>
                    恐れ入りますが、再読み込みをするか時間を空けてからアクセスしてください。
                </p>
                <div className="text-center mt-6">
                    <Button
                        onClick={() => window.location.reload()}
                        variant="contained"
                        startIcon={<CachedIcon />}
                    >
                        再読み込み
                    </Button>
                </div>
            </div>
        </div>
    );
};
