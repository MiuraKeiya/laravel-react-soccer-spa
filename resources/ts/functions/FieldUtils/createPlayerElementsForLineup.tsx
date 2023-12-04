import { calculatePlayerPosition } from "./calculatePlayerPosition";
import { getRatingByPlayerId } from "./getRatingByPlayerId";
import { getPlayerIdsByEvent } from "./getPlayerIdsByEvent";
import { CreatePlayerElement } from "../../components/organisms/Games/CreatePlayerElement";

export const createPlayerElementsForLineup = (
    lineup,
    isHome,
    games,
    season
) => {
    const formation = lineup.formation;
    const teamColors = lineup.team.colors;

    const playerElements = lineup.startXI.map((player, index) => {
        const { x, y } = calculatePlayerPosition(
            formation,
            isHome,
            player.player.grid
        );
        const playerId = player.player.id;
        const rating = getRatingByPlayerId(games[0], playerId);
        const goalScorerIds = getPlayerIdsByEvent(
            games[0],
            playerId,
            "Goal",
            null
        );
        const yellowcardIds = getPlayerIdsByEvent(
            games[0],
            playerId,
            "Card",
            "Yellow Card"
        );
        const substIds = getPlayerIdsByEvent(games[0], playerId, "subst", null);
        const redcardIds = getPlayerIdsByEvent(
            games[0],
            playerId,
            "Card",
            "Red Card"
        );
        const varIds = getPlayerIdsByEvent(games[0], playerId, "Var", null);

        const teamColor = teamColors.player.primary;
        const numberColor = teamColors.player.number;
        const teamforGKColor = teamColors.goalkeeper.primary;
        const numberforGKColor = teamColors.goalkeeper.number;

        return CreatePlayerElement(
            player,
            x,
            y,
            index,
            rating,
            goalScorerIds,
            yellowcardIds,
            substIds,
            redcardIds,
            varIds,
            teamColor,
            numberColor,
            teamforGKColor,
            numberforGKColor,
            season
        );
    });

    return playerElements;
};
