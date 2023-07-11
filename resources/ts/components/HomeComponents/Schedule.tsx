import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import { FixtureResultDate } from "../atoms/FixtureResultDate";
import { Tooltip } from "react-tooltip";

export const Schedule = () => {
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
        <div>
            <div className="text-right mr-2">
                <FixtureResultDate />
            </div>
            {Object.entries(fixtureResult).map(([leagueId, results]) => {
                if (!Array.isArray(results)) {
                    return null; // エラーハンドリング
                }
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
                        {results.map((fixture, index) => {
                            // statusが"Match Finished"の場合は表示しない
                            if (
                                fixture.fixture.status.long !== "Match Finished"
                            ) {
                                return (
                                    <section
                                        key={index}
                                        className="flex items-center justify-between border-b border-[#111931] text-[13px] hover:bg-[#3d4e81] cursor-pointer transition duration-500"
                                    >
                                        <div className="flex items-center space-x-2 ml-2">
                                            <div>
                                                {formatDate(
                                                    fixture.fixture.date
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={
                                                            fixture.teams.home
                                                                .logo
                                                        }
                                                        alt="team"
                                                        className="h-4 w-4"
                                                    />
                                                    <div>
                                                        {
                                                            fixture.teams.home
                                                                .name
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={
                                                            fixture.teams.away
                                                                .logo
                                                        }
                                                        alt="team"
                                                        className="h-4 w-4"
                                                    />
                                                    <div>
                                                        {
                                                            fixture.teams.away
                                                                .name
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-5 mr-3">
                                            <div>
                                                <div>
                                                    {fixture.score.fulltime
                                                        .home !== null
                                                        ? fixture.score.fulltime
                                                              .home
                                                        : "-"}
                                                </div>
                                                <div>
                                                    {fixture.score.fulltime
                                                        .away !== null
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
                                                    {
                                                        fixture.fixture.status
                                                            .long
                                                    }
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </section>
                                );
                            } else {
                                return (
                                    <div>試合終了</div>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
};
