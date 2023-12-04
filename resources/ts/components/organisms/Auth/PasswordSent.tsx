import { useNavigate } from "react-router-dom";
import { Icon } from "../../atoms/Icon";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

export const PasswordSent = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    };

    return (
        <div>
            <div>
                <Icon
                    src="/images/Original1.png"
                    alt="Football"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#EEEEEE]">
                    パスワード再設定メールを送信しました
                </h2>
            </div>
            <div className="mx-auto mt-6">
                <p className="text-white">
                    指定されたメールアドレスへパスワード再設定メールを送信しました。
                    <br />
                    しばらくしてもメールが届かない場合は、スパムフォルダをご確認ください。
                    <br />
                    また、Football
                    Leagueに登録されていないメールアドレスには送信できません。
                </p>
            </div>
            <div className="text-center mt-6">
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    onClick={handleBackClick}
                >
                    トップへ戻る
                </Button>
            </div>
        </div>
    );
};
