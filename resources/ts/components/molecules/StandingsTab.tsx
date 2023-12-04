import { Button } from "../atoms/Button";

type StandingsTabProps = {
    style: string;
    allStandingsStyle: string;
    homeStandingsStyle: string;
    awayStandingsStyle: string;
    onAllStandingsClick: () => void;
    onHomeStandingsClick: () => void;
    onAwayStandingsClick: () => void;
};

export const StandingsTab = ({
    style,
    allStandingsStyle,
    homeStandingsStyle,
    awayStandingsStyle,
    onAllStandingsClick,
    onHomeStandingsClick,
    onAwayStandingsClick,
}: StandingsTabProps) => {
    return (
        <div className={style}>
            <Button
                label="オール"
                style={allStandingsStyle}
                onClick={onAllStandingsClick}
            />
            <Button
                label="ホーム"
                style={homeStandingsStyle}
                onClick={onHomeStandingsClick}
            />
            <Button
                label="アウェイ"
                style={awayStandingsStyle}
                onClick={onAwayStandingsClick}
            />
        </div>
    );
};
