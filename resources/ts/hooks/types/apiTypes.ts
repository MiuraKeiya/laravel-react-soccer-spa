export type LeagueProps = {
    leagueId: string;
    season: string;
};

export type UseDatePickerResult = {
    startDate: Date;
    highlightedDates: Date[];
    selectedDate: string;
    handleDateChange: (date: Date) => void;
    gamesDateloading: boolean;
    gamesDateError: any;
};

export type UseGamesDateApiResult = {
    gamesDate: any;
    gamesDateloading: boolean;
    gamesDateError: any;
};
