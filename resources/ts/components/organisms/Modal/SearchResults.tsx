import { Loading } from "./Loading";
import { SearchError } from "./SearchError";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

export const SearchResults = ({ results, loading, searchQuery }) => {
    return (
        <div>
            {loading ? (
                <Loading />
            ) : results.length === 0 ? (
                <SearchError searchQuery={searchQuery} />
            ) : (
                results.map((result, index) => (
                    <div key={index} className="text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 my-2">
                                <img
                                    src={result.json_information.team.logo}
                                    alt="league"
                                    className="h-10 w-10 border border-white rounded-lg"
                                />
                                <div>
                                    <p>{result.json_information.team.name}</p>
                                    <div className="flex">
                                        <p className="text-[12px] text-[#C8CDCD]">
                                            {
                                                result.json_information.team
                                                    .country
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IconButton sx={{ color: "#B0EE1B" }}>
                                <Tooltip
                                    title="お気に入り追加する！"
                                    placement="left-start"
                                >
                                    <SportsSoccerIcon />
                                </Tooltip>
                            </IconButton>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
