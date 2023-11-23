import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "../../atoms/Icon";
import { CustomSnackbar } from "../../molecules/CustomSnackbar";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../../context/AuthContext";
import { TooManyRequests } from "../Error/TooManyRequests";

export const Top = () => {
    const auth = useAuth();

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
            <Helmet>
                <title>Football League</title>
            </Helmet>
            {auth?.error?.response?.status === 429 ? (
                <TooManyRequests error={auth?.error} />
            ) : (
                <div className="flex">
                    {/* 左側のコンテンツ */}
                    <div className="invisible lg:visible w-0 lg:w-1/2 h-screen bg-[#111931] flex items-center justify-center">
                        <div>
                            <Icon
                                src="/images/Original.png"
                                alt="FootballLeague"
                                className="h-[10rem]"
                            />
                        </div>
                    </div>

                    {/* 右側のコンテンツ */}
                    <div className="lg:w-1/2 lg:h-screen lg:bg-[#B0EE1B] bg-[#111931] flex items-center justify-center flex-col space-y-7">
                        <Icon
                            src="/images/Original.png"
                            alt="FootballLeague"
                            className="h-[5rem] lg:invisible"
                        />
                        <div className="lg:h-full flex flex-col justify-center items-center p-8">
                            <h1 className="text-4xl font-bold lg:text-[#111931] mb-8 text-white">
                                欧州5大リーグのサッカー情報をご覧いただけるサイトへようこそ
                            </h1>
                            <p className="text-lg lg:text-[#111931] text-center mb-8 text-white">
                                このサイトでは、試合結果や選手、チーム、リーグ情報を簡単に閲覧できます。お気に入りのチームとリーグを保存して、最新情報を追跡しましょう。
                            </p>
                            <div className="flex space-x-8">
                                <button
                                    className="lg:bg-[#111931] bg-[#B0EE1B] text-black py-2 px-6 rounded-full lg:hover:bg-[#0D0D17] font-semibold lg:text-white hover:bg-[#292969] hover:text-white lg:hover:text-white"
                                    onClick={handleLogin}
                                >
                                    ログイン
                                </button>
                                <button
                                    className="lg:bg-[#111931] bg-[#B0EE1B] text-black py-2 px-6 rounded-full lg:hover:bg-[#0D0D17] hover:bg-[#292969] font-semibold lg:text-white hover:text-white lg:hover:text-white"
                                    onClick={handleRegister}
                                >
                                    新規登録
                                </button>
                            </div>
                        </div>
                        <div className="lg:invisible">
                            <span className="text-[#B0EE1B]">
                                &copy; {new Date().getFullYear()} Football
                                League
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
