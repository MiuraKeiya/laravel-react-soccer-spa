import { LoadingTitle } from "./LoadingTitle";

export const GamesTitle = ({ games, paginateLoading }) => {
    return (
        <div className="text-white flex items-center space-x-1 ml-2 py-1">
            {paginateLoading ? (
                <LoadingTitle />
            ) : (
                <>
                    <img
                        src={games[0] && games[0]?.json_detail?.league?.logo}
                        alt="league"
                        className="h-10 w-10"
                    />
                    {games[0] && (
                        <p className="text-[20px] font-bold uppercase">
                            {games[0]?.json_detail?.league?.name}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};
