import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { formatDateToCustomFormat } from "../../../functions/Utils";
import { CircularProgress } from "@mui/material";

export const ModalAccount = ({ close, user, loading }) => {
    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center mt-24">
                    <CircularProgress />
                </div>
            ) : (
                <div className="text-white mt-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[22px] font-bold mx-3">
                            アカウント情報
                        </h1>
                        <IconButton
                            color="inherit"
                            aria-label="close"
                            onClick={close}
                            sx={{ color: "#C8CDCD" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="flex flex-col space-y-2 mx-3">
                        <div>
                            <h2 className="text-[#C8CDCD] text-[16px]">
                                ユーザー名 :
                            </h2>
                            <span className="text-[18px]">{user.name}</span>
                        </div>
                        <div className="border-b border-[#111931]"></div>
                        <div>
                            <h2 className="text-[#C8CDCD] text-[16px]">
                                メールアドレス :
                            </h2>
                            <span className="text-[18px]">{user.email}</span>
                        </div>
                        <div className="border-b border-[#111931]"></div>
                        <div>
                            <h2 className="text-[#C8CDCD] text-[16px]">
                                アカウント作成日 :
                            </h2>
                            <span className="text-[18px]">
                                {formatDateToCustomFormat(user.created_at)}
                            </span>
                        </div>
                        <div className="border-b border-[#111931]"></div>
                    </div>
                </div>
            )}
        </>
    );
};
