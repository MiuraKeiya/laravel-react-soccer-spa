import { ReactNode } from "react";
import { Error } from "./components/organisms/Error/Error";
import { Unauthorized } from "./components/organisms/Error/Unauthorized";
import { TooManyRequests } from "./components/organisms/Error/TooManyRequests";

type PageProps = {
    error: any;
    children: ReactNode;
};

export const Page = ({ error, children }: PageProps) => {
    // エラーがあれば対応するコンポーネントを表示する
    if (error) {
        switch (error.response?.status) {
            case 401:
                return <Unauthorized status={error.response?.status} />;
            case 429:
                return <TooManyRequests error={error} />;
            case 400:
            case 405:
            case 422:
            case 500:
                return <Error status={error.response?.status} />;
            default:
                break;
        }
    }

    // エラーがなければコンテンツを表示
    return children;
};
