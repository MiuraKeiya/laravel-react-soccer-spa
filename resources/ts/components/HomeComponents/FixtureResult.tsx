import { useContext, useEffect, useState } from "react";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import { FixtureResultDate } from "../atoms/FixtureResultDate";

export const FixtureResult = () => {
    // 今シーズンの試合日程・試合結果・日付・エラーを取得
    const { fixtureResult, error } = useContext(FixtureResultContext);

    return (
        <main className="flex-grow">
            <div>
                <FixtureResultDate />
                <div className="">
                    {Object.entries(fixtureResult).map(
                        ([leagueId, results]) => {
                            if (!Array.isArray(results)) {
                                return null; // エラーハンドリング
                            }
                            return (
                                <table key={leagueId}>
                                    <thead>
                                        <tr>
                                            <th>
                                                {results[0].league.country}:{" "}
                                                {results[0].league.name}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.map((fixture, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {fixture.teams.away.name}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            );
                        }
                    )}
                </div>
            </div>
        </main>
    );
};
