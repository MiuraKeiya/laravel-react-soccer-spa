import { Icon } from "../../atoms/Icon";
import { Button, CircularProgress } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigation } from "../../../hooks/useNavigation";
import { useAuth } from "../../../context/AuthContext";

export const NotFound = () => {
    const goTo = useNavigation();

    const auth = useAuth();

    const handleRedirect = () => {
        if (auth?.user === null) {
            goTo("/");
        } else {
            goTo("/home");
        }
    };

    return (
        <div className="mx-3">
            <div className="flex justify-center mb-6">
                <Icon
                    src="/images/Original.png"
                    alt="FootballLeague"
                    className="h-[4rem]"
                />
            </div>
            <div className="flex items-center flex-col">
                <h1 className="text-[#B0EE1B] text-[30px]">
                    お探しのページは見つかりません。
                </h1>
                <p className="text-[#B0EE1B] text-[30px] mb-4">
                    404 : Not Found
                </p>
                <p className="text-white">
                    お探しのページは一時的にアクセスができない状況にあるか、
                    <br />
                    移動もしくは削除された可能性があります。
                    <br />
                    また、URLにタイプミスがないか再度ご確認ください。
                </p>
            </div>
            <div className="mt-10 text-center">
                {auth?.userLoading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={handleRedirect}
                    >
                        {auth?.user === null ? "トップへ" : "ホームへ"}
                    </Button>
                )}
            </div>
        </div>
    );
};
