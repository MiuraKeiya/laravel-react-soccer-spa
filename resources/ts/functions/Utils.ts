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

export const SortTopPlayers = (games) => {
    // プレイヤーデータを取得
    const allPlayers = games[0].json_detail?.players.flatMap((team) =>
        team.players.map((player) => ({
            ...player,
            teamName: team.team.name,
            teamLogo: team.team.logo,
        }))
    );

    // シュート数でソート
    const sortedPlayers = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].shots.total || 0) -
            (a.statistics[0].shots.total || 0)
    );

    // 上位3人の選手を取得
    const top3Shots = sortedPlayers.slice(0, 3);

    // パス数でソート
    const sortedByPasses = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].passes.total || 0) -
            (a.statistics[0].passes.total || 0)
    );

    // 上位3人の選手を取得
    const top3Passers = sortedByPasses.slice(0, 3);

    // ドリブル数でソート
    const sortedByDribbles = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].dribbles.attempts || 0) -
            (a.statistics[0].dribbles.attempts || 0)
    );

    // 上位3人の選手を取得
    const top3Dribbles = sortedByDribbles.slice(0, 3);

    // デュエル数でソート
    const sortedByDuels = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].duels.total || 0) -
            (a.statistics[0].duels.total || 0)
    );

    // 上位3人の選手を取得
    const top3Duels = sortedByDuels.slice(0, 3);

    // タックルでソート
    const sortedByTackles = allPlayers.sort(
        (a, b) =>
            (b.statistics[0].tackles.total || 0) -
            (a.statistics[0].tackles.total || 0)
    );

    // 上位3人の選手を取得
    const top3Tackles = sortedByTackles.slice(0, 3);

    const topPlayers = [
        top3Shots,
        top3Passers,
        top3Dribbles,
        top3Duels,
        top3Tackles,
    ];

    return topPlayers;
};

export const latestGames = (games) => {
    // 今日の日付を取得(例: 2023-09-15)
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    // 今日から過去の試合を抽出
    const pastGames = games.filter((game) => {
        const gameDate = game.json_detail?.fixture?.date.split("T")[0];
        return gameDate < formattedDate;
    });

    // 過去の試合を日付降順で並べ替え
    pastGames.sort((a, b) => {
        const dateA = new Date(a.json_detail?.fixture?.date.split("T")[0]);
        const dateB = new Date(b.json_detail?.fixture?.date.split("T")[0]);
        return dateB - dateA;
    });

    // 5試合を抽出して返す
    return pastGames.slice(0, 5);
};
