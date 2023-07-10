import { useContext, useEffect, useState } from "react";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import { FixtureResultDate } from "../atoms/FixtureResultDate";

export const FixtureResult = () => {
    // 今シーズンの試合日程・試合結果・日付・エラーを取得
    const { fixtureResult, error } = useContext(FixtureResultContext);

    // dateを変換
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            month: "numeric",
            day: "numeric",
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
        };
        const formattedDate = new Intl.DateTimeFormat("ja-JP", options).format(
            date
        );
        const [datePart, timePart] = formattedDate.split(" ");
        return <>{timePart}</>;
    };

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
                                <div key={leagueId}>
                                    {results[0].league.country}:{" "}
                                    {results[0].league.name}
                                    <table>
                                        <tbody>
                                            {results.map((fixture, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {formatDate(
                                                            fixture.fixture.date
                                                        )}
                                                    </td>
                                                    <td>
                                                        {
                                                            fixture.teams.home
                                                                .name
                                                        }
                                                        <br />
                                                        {
                                                            fixture.teams.away
                                                                .name
                                                        }
                                                    </td>
                                                    <td >
                                                        {fixture.score.fulltime
                                                            .home !== null
                                                            ? fixture.score
                                                                  .fulltime.home
                                                            : "-"}
                                                        <br />
                                                        {fixture.score.fulltime
                                                            .away !== null
                                                            ? fixture.score
                                                                  .fulltime.away
                                                            : "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </main>
    );
};
