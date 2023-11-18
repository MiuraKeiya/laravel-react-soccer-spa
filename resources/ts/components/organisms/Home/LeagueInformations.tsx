import { useState } from "react";
import { PremierLeague } from "./Informations/PremierLeague";
import { LaLiga } from "./Informations/LaLiga";
import { Bundesliga } from "./Informations/Bundesliga";
import { SerieA } from "./Informations/SerieA";
import { Ligue1 } from "./Informations/Ligue1";

export const LeagueInformations = ({ season }) => {
    const [selectedLeague, setSelectedLeague] = useState(39);

    const leagues = {
        39: PremierLeague,
        140: LaLiga,
        78: Bundesliga,
        135: SerieA,
        61: Ligue1,
    };

    const handleLeagueChange = (e) => {
        const newLeagueId = e.target.value;
        setSelectedLeague(newLeagueId);
    };

    const LeagueComponent = leagues[selectedLeague];

    return (
        <div className="mx-5 py-5">
            <h1 className="text-[16px] font-semibold text-[#EEEEEE]">
                欧州5大リーグ情報
            </h1>
            <select
                id="leagueInformationSelector"
                onChange={handleLeagueChange}
                value={selectedLeague}
                className="py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
                <option value="39">Premier League</option>
                <option value="140">La Liga</option>
                <option value="78">Bundesliga</option>
                <option value="135">Serie A</option>
                <option value="61">Ligue 1</option>
            </select>
            <div className="bg-[#10161c] rounded-lg mt-6 text-[#eeeeeee7]">
                <LeagueComponent season={season} />
            </div>
        </div>
    );
};
