import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { Field } from "./Field";
import { TeamMembers } from "./TeamMembers";

export const Members = () => {
    const { result, error } = useContext(MatchDetailsContext);

    if (result.length === 0) {
        return null;
    }

    return (
        <div>
            {result.response.map((match, index) => (
                <div
                    key={index}
                    className="bg-[#111931] py-1 flex flex-row justify-between items-center"
                >
                    {match.lineups.map((lineup, lineupIndex) => (
                        <div key={lineupIndex} className="flex ml-3">
                            <span className="text-[11px] font-bold text-[#C8CDCD]">
                                {lineup.team.name === match.teams.home.name &&
                                    lineup.formation}
                            </span>
                        </div>
                    ))}
                    <span className="text-[11px] font-bold text-[#C8CDCD]">
                        フォーメーション
                    </span>
                    {match.lineups.map((lineup, lineupIndex) => (
                        <div key={lineupIndex} className="flex mr-3">
                            <span className="text-[11px] font-bold text-[#C8CDCD]">
                                {lineup.team.name === match.teams.away.name &&
                                    lineup.formation}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
            <Field />
            <TeamMembers />
        </div>
    );
};
