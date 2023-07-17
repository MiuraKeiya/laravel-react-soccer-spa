import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import { FixtureResultDate } from "../atoms/FixtureResultDate";
import { Tooltip } from "react-tooltip";

export const EndMatch = () => {
    // 今シーズンの試合日程・試合結果・日付・エラーを取得
    const { fixtureResult, error } = useContext(FixtureResultContext);

    return (
        <div>
            <div className="text-right mr-2">
                <FixtureResultDate />
            </div>
            {Object.entries(fixtureResult).map(([leagueId, results]) => {
                if (!Array.isArray(results)) {
                    return (
                        <div className="flex justify-center items-center h-[20rem]">
                            <p className="text-[13px] text-[#C8CDCD]">
                                試合データは存在しません。
                            </p>
                        </div>
                    ); // エラーハンドリング
                }
                const finishedMatches = results.filter(
                    (fixture) =>
                        fixture.fixture.status.long === "Match Finished"
                );
                return (
                    <div key={leagueId} className="text-[#EEEEEE]">
                        <div className="flex items-center justify-between bg-[#111931] h-6">
                            <div className="flex items-center space-x-2">
                                <img
                                    src={results[0].league.flag}
                                    alt="team"
                                    className="h-5 w-5 ml-2"
                                />
                                <h2 className="text-[13px] font-bold text-[#C8CDCD]">
                                    {results[0].league.country.toUpperCase()}:{" "}
                                    {results[0].league.name.toUpperCase()}
                                </h2>
                            </div>
                            <a className="mr-3 text-[13px] text-[#C8CDCD] underline hover:no-underline cursor-pointer">
                                順位表
                            </a>
                        </div>
                        {finishedMatches.length > 0 ? (
                            finishedMatches.map((fixture, index) => (
                                <section
                                    key={index}
                                    className="flex items-center justify-between border-b border-[#111931] text-[13px] hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                >
                                    <div className="flex items-center space-x-2 ml-2">
                                        <div className="text-[#C8CDCD]">
                                            {fixture.fixture.status.long ===
                                                "Match Finished" && "試合終了"}
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        fixture.teams.home.logo
                                                    }
                                                    alt="team"
                                                    className="h-4 w-4"
                                                />
                                                <div>
                                                    {fixture.teams.home.name}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src={
                                                        fixture.teams.away.logo
                                                    }
                                                    alt="team"
                                                    className="h-4 w-4"
                                                />
                                                <div>
                                                    {fixture.teams.away.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-5 mr-3">
                                        <div>
                                            <div>
                                                {fixture.score.fulltime.home !==
                                                null
                                                    ? fixture.score.fulltime
                                                          .home
                                                    : "-"}
                                            </div>
                                            <div>
                                                {fixture.score.fulltime.away !==
                                                null
                                                    ? fixture.score.fulltime
                                                          .away
                                                    : "-"}
                                            </div>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCircleQuestion}
                                                className={`text-gray-400 cursor-default my-anchor-element-${fixture.fixture.id}`}
                                            />
                                            <Tooltip
                                                anchorSelect={`.my-anchor-element-${fixture.fixture.id}`}
                                                place="left"
                                            >
                                                {fixture.fixture.status.long}
                                            </Tooltip>
                                        </div>
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className="flex flex-col items-center space-y-1 my-16">
                                <span className="text-[13px] p-2 text-[#C8CDCD]">
                                    現時点で終了した試合はありません。
                                </span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
