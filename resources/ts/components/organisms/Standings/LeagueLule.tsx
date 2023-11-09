import { leagueLule } from "../../../functions/Utils";

export const LeagueLule = ({ standings }) => {
    return (
        <div className="mt-3 ml-3">
            <div className="flex items-center space-x-1">
                <img
                    src={standings.league?.logo}
                    className="w-7 h-7 bg-white rounded"
                />
                <p className="text-[18px] text-white uppercase font-bold">
                    {standings.league?.name}ルール:
                </p>
                <p className="text-[15px] text-white">
                    {leagueLule(standings.league?.id)}
                </p>
            </div>
        </div>
    );
};
