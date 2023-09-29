import { Error } from "./components/organisms/Error/Error";

export const Page = ({ error, children }) => {
    // エラーがあれば対応するコンポーネントを表示する
    if (error) {
        switch (error) {
            case 404:
                break;
            case 400:
                return <Error status={error} />;
            default:
                break;
        }
    }

    // エラーがなければコンテンツを表示
    return children;
};
