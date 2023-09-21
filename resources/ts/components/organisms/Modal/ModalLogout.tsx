import { useLogoutApi } from "../../../hooks/useLogoutApi";
import { Button } from "@mui/material";

export const ModalLogout = ({ close }) => {
    return (
        <div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-[22px] font-bold mx-3 text-white">
                    ログアウト
                </h1>
                <h2 className="text-[#C8CDCD]">
                    ログアウトしてもよろしいですか？
                </h2>
            </div>
            <div className="flex flex-col space-y-4 mt-3">
                <Button variant="outlined" className="w-[25rem]">
                    はい
                </Button>
                <Button
                    variant="contained"
                    className="w-[25rem]"
                    onClick={close}
                >
                    いいえ
                </Button>
            </div>
        </div>
    );
};
