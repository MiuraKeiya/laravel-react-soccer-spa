import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RankingContext } from "../../provider/RankingProvider";
import { Loading } from "../atoms/Loading";
import { RankingSelecter } from "./RankingSelecter";

export const TeamRankings = () => {
    const { leagueId, season } = useParams();

    const { rankingData, setId, setSeason, error } = useContext(RankingContext);

    useEffect(() => {
        setId(leagueId);
        setSeason(season);
    }, [leagueId, season]);

    if (rankingData.length === 0) {
        return <Loading />;
    }
    
    return (
        <main className="flex-grow bg-[#1d2233]">
            <RankingSelecter />
        </main>
    );
};
