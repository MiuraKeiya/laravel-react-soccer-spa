import { SquadLoading } from "../Loading/SquadLoading";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

export const Squad = ({ squad, loading, maxSeason }) => {
    // ローディングを表示
    if (loading) {
        return (
            <div className="bg-[#1d2233] mt-2 flex justify-center flex-col items-center">
                <SquadLoading />
            </div>
        );
    }

    const navigate = useNavigate();

    // 選手詳細ページへ遷移
    const handleClick = (playerId, maxSeason) => {
        navigate(`/player/${playerId}/season/${maxSeason}`);
    };

    return (
        <div className="bg-[#1d2233] mt-2 rounded overflow-x-auto">
            <div className="text-white flex items-center pl-4 space-x-2 mt-2 mb-2">
                <PeopleIcon />
                <h1 className="font-bold text-[20px]">在籍選手</h1>
            </div>
            <div className="mt-1">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ゴールキーパー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        {squad.map((player, index) => (
                            <tbody key={index}>
                                {player.json_statistics.statistics[0].games
                                    .position === "Goalkeeper" && (
                                    <tr
                                        className="text-white border-b border-black text-center h-16 hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                        onClick={() =>
                                            handleClick(
                                                player.json_statistics.player
                                                    .id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        <td className="w-[42.375rem] pl-2">
                                            <div className="text-[20px] flex items-center">
                                                <img
                                                    src={
                                                        player.json_statistics
                                                            .player.photo
                                                    }
                                                    alt="player"
                                                    className="h-11 w-11 rounded-full mr-3"
                                                />
                                                {
                                                    player.json_statistics
                                                        .player.name
                                                }
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics.player
                                                .age || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].games
                                                .appearences || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].goals.total || 0}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            <div className="mt-3">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ディフェンダー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        {squad.map((player, index) => (
                            <tbody key={index}>
                                {player.json_statistics.statistics[0].games
                                    .position === "Defender" && (
                                    <tr
                                        className="text-white border-b border-black text-center h-16 hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                        onClick={() =>
                                            handleClick(
                                                player.json_statistics.player
                                                    .id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        <td className="w-[42.375rem] pl-2">
                                            <div className="text-[20px] flex items-center">
                                                <img
                                                    src={
                                                        player.json_statistics
                                                            .player.photo
                                                    }
                                                    alt="player"
                                                    className="h-11 w-11 rounded-full mr-3"
                                                />
                                                {
                                                    player.json_statistics
                                                        .player.name
                                                }
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics.player
                                                .age || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].games
                                                .appearences || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].goals.total || 0}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            <div className="mt-3">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        ミッドフィルダー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        {squad.map((player, index) => (
                            <tbody key={index}>
                                {player.json_statistics.statistics[0].games
                                    .position === "Midfielder" && (
                                    <tr
                                        className="text-white border-b border-black text-center h-16 hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                        onClick={() =>
                                            handleClick(
                                                player.json_statistics.player
                                                    .id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        <td className="w-[42.375rem] pl-2">
                                            <div className="text-[20px] flex items-center">
                                                <img
                                                    src={
                                                        player.json_statistics
                                                            .player.photo
                                                    }
                                                    alt="player"
                                                    className="h-11 w-11 rounded-full mr-3"
                                                />
                                                {
                                                    player.json_statistics
                                                        .player.name
                                                }
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics.player
                                                .age || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].games
                                                .appearences || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].goals.total || 0}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            <div className="mt-3 mb-6">
                <div className="bg-[#111931] mb-2 mx-3 rounded">
                    <h2 className="text-[#EEEEEE] font-bold text-[20px] mx-6 h-11 flex justify-center items-center">
                        アタッカー
                    </h2>
                </div>
                <div className="mx-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[#EEEEEE]">
                                <th className="text-left">名前</th>
                                <th className="w-[7rem] lg:w-[8rem]">年齢</th>
                                <th className="w-[15rem] lg:w-[16rem]">
                                    出場数
                                </th>
                                <th className="w-[9rem] lg:w-[8rem]">得点</th>
                            </tr>
                        </thead>
                        {squad.map((player, index) => (
                            <tbody key={index}>
                                {player.json_statistics.statistics[0].games
                                    .position === "Attacker" && (
                                    <tr
                                        className="text-white border-b border-black text-center h-16 hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                        onClick={() =>
                                            handleClick(
                                                player.json_statistics.player
                                                    .id,
                                                maxSeason
                                            )
                                        }
                                    >
                                        <td className="w-[42.375rem] pl-2">
                                            <div className="text-[20px] flex items-center">
                                                <img
                                                    src={
                                                        player.json_statistics
                                                            .player.photo
                                                    }
                                                    alt="player"
                                                    className="h-11 w-11 rounded-full mr-3"
                                                />
                                                {
                                                    player.json_statistics
                                                        .player.name
                                                }
                                            </div>
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics.player
                                                .age || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].games
                                                .appearences || 0}
                                        </td>
                                        <td className="text-[20px]">
                                            {player.json_statistics
                                                .statistics[0].goals.total || 0}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};
