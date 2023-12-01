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
            teamId: team.team.id,
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

// configの最大値を返す
export const findMaxSeason = (config) => {
    let maxSeason = -Infinity;

    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            const season = parseFloat(config[key]);
            if (!isNaN(season) && season > maxSeason) {
                maxSeason = season;
            }
        }
    }

    if (maxSeason === -Infinity) {
        maxSeason = 0;
    }

    return maxSeason;
};

export const formatDateToCustomFormat = (dateString) => {
    const originalDate = new Date(dateString);
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0");
    const day = String(originalDate.getDate()).padStart(2, "0");
    const formattedDateStr = `${year}-${month}-${day}`;
    return formattedDateStr;
};

export const getDescriptionInJapanese = (description) => {
    switch (description) {
        case "Promotion - Champions League (Group Stage: )":
        case "Promotion - Champions League (Group Stage)":
            return {
                description:
                    "昇格 - UEFAチャンピオンズリーグ (グループステージ: )",
                bgColorClass: "bg-[#81319c]",
            };
        case "Promotion - Europa League (Group Stage: )":
        case "Promotion - Europa League (Group Stage)":
            return {
                description: "昇格 - UEFAヨーロッパリーグ (グループステージ: )",
                bgColorClass: "bg-[#276e8d]",
            };
        case "Promotion - Europa Conference League (Qualification: )":
        case "Promotion - Europa League (Qualification)":
            return {
                description:
                    "昇格 - UEFAヨーロッパカンファレンスリーグ (資格予選: )",
                bgColorClass: "bg-[#787822]",
            };
        case "Relegation - Championship":
            return {
                description: "降格 - チャンピオンシップ",
                bgColorClass: "bg-[#a62b1b]",
            };
        case "Promotion - Champions League (Qualification: )":
            return {
                description: "昇格 - UEFAチャンピオンズリーグ (資格予選: )",
                bgColorClass: "bg-blue-600",
            };
        case "Relegation - Ligue 2":
            return {
                description: "降格 - リーグ・ドゥ",
                bgColorClass: "bg-[#a62b1b]",
            };
        case "Promotion - Europa Conference League (Group Stage: )":
            return {
                description:
                    "昇格 - UEFAヨーロッパカンファレンスリーグ (グループステージ: )",
                bgColorClass: "bg-green-600",
            };
        case "Bundesliga (Relegation)":
            return {
                description: "ブンデスリーガ (降格戦)",
                bgColorClass: "bg-gray-500",
            };
        case "Relegation - 2. Bundesliga":
            return {
                description: "降格 - 2.ブンデスリーガ",
                bgColorClass: "bg-[#a62b1b]",
            };
        case "Serie A (Additional match: )":
            return {
                description: "セリエ A (追加試合: )",
                bgColorClass: "bg-gray-500",
            };
        case "Relegation - Serie B":
            return {
                description: "降格 - セリエ B",
                bgColorClass: "bg-[#a62b1b]",
            };
        case "Relegation - LaLiga2":
            return {
                description: "降格 - ラ・リーガ 2部",
                bgColorClass: "bg-[#a62b1b]",
            };
        case "Ligue 1 (Promotion - Play Offs: )":
            return {
                description: "リーグ・アン (昇格 - プレーオフ: )",
                bgColorClass: "bg-gray-500",
            };
        default:
            return { description, bgColorClass: "bg-orange-400" };
    }
};

export const leagueLule = (leagueId) => {
    switch (leagueId) {
        case 39:
            return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
        case 61:
            return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
        case 78:
            return "シーズン終了時に同点のチームがいる場合は、得失点差で順位を決定する。";
        case 135:
            return "シーズン終了時に同点のチームがいる場合は、当該チームの直接対決の結果で順位を決定する。";
        case 140:
            return "シーズン終了時に同点のチームがいる場合は、当該チームの直接対決の結果で順位を決定する。";
        default:
            return "";
    }
};

// 各試合ごとにイベントを検索し、条件に合致する選手を取得する関数
export const getPlayersWithRedCard = (data) => {
    const teamRedCardCounts = {};

    for (const league in data) {
        const leagueMatches = data[league];

        for (const match of leagueMatches) {
            const matchEvents = match.json_detail.events;

            for (const event of matchEvents) {
                if (event.type === "Card" && event.detail === "Red Card") {
                    const teamId = event.team.id;

                    // チームごとのレッドカード数を追跡
                    teamRedCardCounts[teamId] =
                        (teamRedCardCounts[teamId] || 0) + 1;
                }
            }
        }
    }

    // チームごとのレッドカード数を元にプレイヤー情報を構築
    const redCardPlayers = Object.keys(teamRedCardCounts).map((teamId) => ({
        teamId: parseFloat(teamId),
        redCardCount: teamRedCardCounts[teamId],
    }));

    return redCardPlayers;
};

// S3のURLを生成する
export const imageUrl = (category, id, extension) => {
    const baseUrl = import.meta.env.VITE_APP_S3_BASE_URL;
    return `${baseUrl}/${category}/${id}.${extension}`;
};

export const compareTeams = (data) => {
    const homeTeam = data[0];
    const awayTeam = data[1];

    const homeValues = homeTeam.statistics.map((stat) =>
        stat.value !== null ? parseFloat(stat.value) : 0
    );
    const awayValues = awayTeam.statistics.map((stat) =>
        stat.value !== null ? parseFloat(stat.value) : 0
    );

    let homeStatus = 0;
    let awayStatus = 0;

    homeValues.forEach((homeValue, index) => {
        const awayValue = awayValues[index];

        if (homeValue > awayValue) {
            homeStatus += 1;
        } else if (awayValue > homeValue) {
            awayStatus += 1;
        }
        // Draw: do nothing
    });

    // Normalize status percentages to ensure the total is 100%
    const total = homeStatus + awayStatus;
    const homePercentage = Math.floor((homeStatus / total) * 100);
    const awayPercentage = Math.floor((awayStatus / total) * 100);

    return {
        homeTeam: homePercentage.toFixed(0) + "%",
        awayTeam: awayPercentage.toFixed(0) + "%",
    };
};
