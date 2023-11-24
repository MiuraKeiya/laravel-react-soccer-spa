import { useState, useEffect } from "react";
import { PieChart } from "./PieChart";
import { ANIMATION_INCREMENT } from "../../../../constants/pieChart";
import { ANIMATION_INTERVAL } from "../../../../constants/pieChart";
import { MAX_PROGRESS } from "../../../../constants/pieChart";
import { INCREMENT } from "../../../../constants/pieChart";
import { DEFAULT_COUNT } from "../../../../constants/pieChart";
import { PERCENTAGE_BASE } from "../../../../constants/pieChart";
import { INITIAL_PROGRESS } from "../../../../constants/pieChart";

export const PositionPieCharts = ({ squad }) => {
    const [animationProgress, setAnimationProgress] = useState(0);

    useEffect(() => {
        let progress = INITIAL_PROGRESS;

        const interval = setInterval(() => {
            progress += ANIMATION_INCREMENT;
            if (progress >= MAX_PROGRESS) {
                progress = MAX_PROGRESS;
                clearInterval(interval);
            }
            setAnimationProgress(progress);
        }, ANIMATION_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const positionCounts = {};
    squad.forEach((player) => {
        const position = player.json_statistics.statistics[0]?.games.position;
        if (position !== null && position !== undefined) {
            positionCounts[position] =
                (positionCounts[position] || DEFAULT_COUNT) + INCREMENT;
        }
    });

    const totalPlayers = squad.length;

    const positionPercentages = {};
    for (const position in positionCounts) {
        positionPercentages[position] =
            (positionCounts[position] / totalPlayers) * PERCENTAGE_BASE;
    }

    const positionData = Object.entries(positionPercentages).map(
        ([position, value]) => ({
            label: position,
            value,
            count: positionCounts[position],
        })
    );

    return (
        <div className="flex">
            {positionData.map((data, index) => (
                <div
                    key={index}
                    className="mx-5 mt-3 mb-5 flex flex-col items-center space-y-2 font-semibold"
                >
                    <h3>{data.label}</h3>
                    <div className="flex flex-col items-center space-y-2">
                        <PieChart
                            data={[data]}
                            animationProgress={animationProgress}
                        />
                        <p>{data.count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
