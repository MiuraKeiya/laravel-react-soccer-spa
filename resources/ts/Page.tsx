import { Error } from "./components/organisms/Error/Error";
import { Unauthorized } from "./components/organisms/Error/Unauthorized";
import { TooManyRequests } from "./components/organisms/Error/TooManyRequests";

export const Page = ({ error, children }) => {
    // エラーがあれば対応するコンポーネントを表示する
    if (error) {
        switch (error.response?.status) {
            case 401:
                return <Unauthorized status={error} />;
            case 429:
                return <TooManyRequests status={error} />;
            case 400:
            case 500:
                return <Error status={error} />;
            default:
                break;
        }
    }

    // エラーがなければコンテンツを表示
    return children;
};
