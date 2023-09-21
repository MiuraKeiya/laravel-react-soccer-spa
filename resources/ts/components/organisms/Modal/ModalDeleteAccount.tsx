import { Button } from "@mui/material";

export const ModalDeleteAccount = ({ close, user }) => {
    return (
        <div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-[22px] font-bold mx-3 text-white">
                    アカウント削除
                </h1>
                <span className="text-white">アカウント : {user.name}</span>
                <span className="text-[#C8CDCD]">
                    このアカウントを削除してもよろしいですか？
                </span>
            </div>
            <div className="flex flex-col space-y-4 mt-3">
                <Button variant="outlined" className="w-[25rem]" color="error">
                    はい
                </Button>
                <Button
                    variant="contained"
                    className="w-[25rem]"
                    onClick={close}
                    color="inherit"
                >
                    いいえ
                </Button>
            </div>
        </div>
    );
};
