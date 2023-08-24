export const groupGamesByLeague = (games) => {
    return games.reduce((accumulator, game) => {
        const leagueName = game.json_detail.league.name;
        if (!accumulator[leagueName]) {
            accumulator[leagueName] = [];
        }
        accumulator[leagueName].push(game);
        return accumulator;
    }, {});
};

export const formatDate = (dateString) => {
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
    return timePart;
};
