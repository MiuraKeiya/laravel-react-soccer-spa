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

export const formatDatePart = (dateString) => {
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
    return datePart;
};

export const formatAllDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}.${month}.${day}.${hours}:${minutes}`;
};
