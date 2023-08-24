import { Button } from "../atoms/Button";

type GamesButtonProps = {
    style: string;
    allGamesStyle: string;
    finishedStyle: string;
    scheduledStyle: string;
    onAllGamesClick: () => void;
    onFinishedGamesClick: () => void;
    onScheduledGamesClick: () => void;
};

export const GamesButton = ({
    style,
    allGamesStyle,
    finishedStyle,
    scheduledStyle,
    onAllGamesClick,
    onFinishedGamesClick,
    onScheduledGamesClick,
}: GamesButtonProps) => {
    return (
        <div className={style}>
            <Button
                label="全ての試合"
                style={allGamesStyle}
                onClick={onAllGamesClick}
            />
            <Button
                label="終了した試合"
                style={finishedStyle}
                onClick={onFinishedGamesClick}
            />
            <Button
                label="開催予定"
                style={scheduledStyle}
                onClick={onScheduledGamesClick}
            />
        </div>
    );
};
