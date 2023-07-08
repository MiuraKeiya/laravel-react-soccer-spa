import { useContext, useEffect, useState } from "react";
import { FixtureResultContext } from "../../provider/FixtureResultProvider";
import { FixtureResultDate } from "../atoms/FixtureResultDate";

export const FixtureResult = () => {
    // 今シーズンの試合日程・試合結果・日付・エラーを取得
    const { fixtureResult, setDate, error } = useContext(FixtureResultContext);

    return <FixtureResultDate />;
};
