import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MatchDetailsContext } from "../../provider/MatchDetailsProvider";
import { Result } from "./Result";
import { DetailsSelecter } from "./DetailsSelecter";
import { useEffect } from "react";

export const Match = () => {
    // パラメータから試合idを取得
    const { fixtureId, leagueId } = useParams();

    const { setMatchId, setLeagueMatchId, error } =
        useContext(MatchDetailsContext);

    useEffect(() => {
        setMatchId(fixtureId);
        setLeagueMatchId(leagueId);
    }, [fixtureId, leagueId]);

    return (
        <main className="flex-grow bg-[#1d2233]">
            <Result />
            <DetailsSelecter />
        </main>
    );
};
