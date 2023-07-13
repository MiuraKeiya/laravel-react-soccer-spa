import { useState } from "react";
import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import ReactCardFlip from "react-card-flip";

export const Field = () => {
    const { result, error } = useContext(MatchDetailsContext);

    const [homeFlippedPlayers, setHomeFlippedPlayers] = useState([]);

    const [awayFlippedPlayers, setAwayFlippedPlayers] = useState([]);

    const handleHomeMouseEnter = (index) => {
        setHomeFlippedPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[index] = true;
            return updatedPlayers;
        });
    };

    const handleHomeMouseLeave = (index) => {
        setHomeFlippedPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[index] = false;
            return updatedPlayers;
        });
    };

    const handleAwayMouseEnter = (index) => {
        setAwayFlippedPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[index] = true;
            return updatedPlayers;
        });
    };

    const handleAwayMouseLeave = (index) => {
        setAwayFlippedPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[index] = false;
            return updatedPlayers;
        });
    };

    if (result.length === 0) {
        return null;
    }

    const playerHomePositions = {
        "1:1": { left: "18px", top: "206px" }, // キーパー
        "2:4": { left: "95px", top: "380px" }, // 右サイドバック
        "2:3": { left: "95px", top: "270px" }, // 右DF
        "2:2": { left: "95px", top: "150px" }, // 左DF
        "2:1": { left: "95px", top: "40px" }, // 左サイドバック
        "3:3": { left: "270px", top: "206px" },
        "3:2": { left: "180px", top: "270px" }, // 右MF
        "3:1": { left: "180px", top: "150px" }, // 左MF
        "4:3": { left: "270px", top: "40px" }, // 左サイドハーフ
        "4:2": { left: "180px", top: "206px" }, // トップ下
        "4:1": { left: "270px", top: "380px" }, // 右サイドハーフ
        "5:1": { left: "300px", top: "206px" }, // FW
    };

    const playerAwayPositions = {
        "1:1": { left: "590px", top: "206px" }, // キーパー
        "2:4": { left: "500px", top: "230px" },
        "2:3": { left: "510px", top: "40px" }, // 34
        "2:2": { left: "530px", top: "206px" }, // 5
        "2:1": { left: "510px", top: "380px" }, // 4
        "3:3": { left: "410px", top: "206px" }, // 13
        "3:2": { left: "360px", top: "380px" }, // 10
        "3:1": { left: "470px", top: "206px" }, // 25
        "4:3": { left: "360px", top: "40px" }, // 7
        "4:2": { left: "450px", top: "100px" }, // 14
        "4:1": { left: "450px", top: "310px" }, // 11
        "5:1": { left: "340px", top: "206px" }, // 18
    };

    return (
        <div
            className="relative mx-auto bg-no-repeat bg-cover bg-center h-[16rem] w-[23rem] sm:h-[26rem] md:h-[33rem] lg:h-[28rem] sm:w-[37rem] md:w-[47rem] lg:w-[40rem] mt-4 mb-4"
            style={{ backgroundImage: "url('/images/1407951 (1).jpg')" }}
        >
            <div>
                {/** Homeチーム */}
                {result.response[0].lineups[0].startXI.map((startXI, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={playerHomePositions[startXI.player.grid]}
                    >
                        <ReactCardFlip
                            isFlipped={homeFlippedPlayers[index]}
                            flipDirection="vertical"
                            flipSpeedFrontToBack={0.4}
                        >
                            {/* 表 */}
                            <div
                                className="flex items-center justify-center bg-red-500 font-bold rounded-full w-9 h-9 cursor-pointer"
                                onMouseEnter={() => handleHomeMouseEnter(index)}
                                onMouseLeave={() => handleHomeMouseLeave(index)}
                            >
                                <a className="text-white text-[15px]">
                                    {startXI.player.number}
                                </a>
                            </div>
                            {/* 裏 */}
                            <div
                                onMouseEnter={() => handleHomeMouseEnter(index)}
                                onMouseLeave={() => handleHomeMouseLeave(index)}
                                className="cursor-pointer"
                            >
                                <a onClick={() => onClick(startXI.player.id)}>
                                    <img
                                        src={`https://media-3.api-sports.io/football/players/${startXI.player.id}.png`}
                                        className="w-9 h-9 rounded-full"
                                    />
                                </a>
                            </div>
                        </ReactCardFlip>
                        <div className="text-[10px]">{startXI.player.name}</div>
                    </div>
                ))}
            </div>
            <div>
                {/** Awayチーム */}
                {result.response[0].lineups[1].startXI.map((startXI, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={playerAwayPositions[startXI.player.grid]}
                    >
                        <ReactCardFlip
                            isFlipped={awayFlippedPlayers[index]}
                            flipDirection="vertical"
                            flipSpeedFrontToBack={0.4}
                        >
                            {/* 表*/}
                            <div
                                className="flex items-center justify-center bg-white font-bold rounded-full w-9 h-9 cursor-pointer"
                                onMouseEnter={() => handleAwayMouseEnter(index)}
                                onMouseLeave={() => handleAwayMouseLeave(index)}
                            >
                                <a className="text-black text-[15px]">
                                    {startXI.player.number}
                                </a>
                            </div>
                            {/* 裏 */}
                            <div
                                onMouseEnter={() => handleAwayMouseEnter(index)}
                                onMouseLeave={() => handleAwayMouseLeave(index)}
                                className="cursor-pointer"
                            >
                                <a onClick={() => onClick(startXI.player.id)}>
                                    <img
                                        src={`https://media-3.api-sports.io/football/players/${startXI.player.id}.png`}
                                        className="w-9 h-9 rounded-full"
                                    />
                                </a>
                            </div>
                        </ReactCardFlip>
                        <div className="text-[10px]">{startXI.player.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
