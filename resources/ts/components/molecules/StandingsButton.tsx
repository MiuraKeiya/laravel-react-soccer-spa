import { Button } from "../atoms/Button";

type StandigsButtonProps = {
    style: string;
    standingsStyle: string;
    rankingsStyle: string;
    onStandingsClick: () => void;
    onRankingsClick: () => void;
};

export const StandingsButton = ({
    style,
    standingsStyle,
    rankingsStyle,
    onStandingsClick,
    onRankingsClick,
}: StandigsButtonProps) => {
    return (
        <div className={style}>
            <Button
                label="順位表"
                style={standingsStyle}
                onClick={onStandingsClick}
            />
            <Button
                label="得点王"
                style={rankingsStyle}
                onClick={onRankingsClick}
            />
        </div>
    );
};
