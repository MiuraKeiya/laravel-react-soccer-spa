import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "../../atoms/Icon";
import { CustomSnackbar } from "../../molecules/CustomSnackbar";

export const Top = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const snackbarMessage = location.state?.message;

    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <>
            {snackbarMessage && (
                <CustomSnackbar message={snackbarMessage} severity="success" />
            )}
            <div className="flex">
                {/* 左側のコンテンツ */}
                <div className="w-1/2 h-screen bg-[#111931] flex items-center justify-center">
                    <div>
                        <Icon
                            src="/images/Original.png"
                            alt="FootballLeague"
                            className="h-[10rem]"
                        />
                    </div>
                </div>

                {/* 右側のコンテンツ */}
                <div className="w-1/2 h-screen bg-[#B0EE1B]">
                    <div className="h-full flex flex-col justify-center items-center p-8">
                        <h1 className="text-4xl font-bold text-[#111931] mb-4">
                            欧州5大リーグのサッカー情報をご覧いただけるサイトへようこそ！
                        </h1>
                        <p className="text-lg text-[#111931] text-center mb-8">
                            このサイトでは、試合結果や選手、チーム、リーグ情報を簡単に閲覧できます。お気に入りのチームとリーグを保存して、最新情報を追跡しましょう。
                        </p>
                        <div className="flex space-x-3">
                            <button
                                className="bg-[#111931] text-white py-2 px-6 rounded-full hover:bg-[#0D0D17]"
                                onClick={handleLogin}
                            >
                                ログイン
                            </button>
                            <button
                                className="bg-[#111931] text-white py-2 px-6 rounded-full hover:bg-[#0D0D17]"
                                onClick={handleRegister}
                            >
                                新規登録
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
