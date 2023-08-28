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
            <Button style={allGamesStyle} onClick={onAllGamesClick}>
                全ての試合
            </Button>
            <Button style={finishedStyle} onClick={onFinishedGamesClick}>
                終了した試合
            </Button>
            <Button style={scheduledStyle} onClick={onScheduledGamesClick}>
                開催予定
            </Button>
        </div>
    );
};
