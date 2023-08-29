import { useState } from "react";
import { ModalLeague } from "./ModalLeague";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const ModalFavorite = ({ onClick }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleClear = () => {
        setSearchQuery("");
    };

    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-[#111931] mb-5">
                <div className="ml-3 flex items-centerx space-x-1">
                    <SportsSoccerIcon className="text-[#B0EE1B]" />
                    <h1 className="text-[#EEEEEE] font-bold">
                        お気に入り追加 / 検索
                    </h1>
                </div>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="close"
                        onClick={onClick}
                        sx={{ color: "#C8CDCD" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mx-3">
                <div className="relative">
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                        <SearchIcon className="text-[#C8CDCD]" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="リーグ名またはチーム名を入力"
                        className="pl-8 pr-3 py-1 rounded-md border border-[#C8CDCD] w-full focus:outline-none focus:border-[#111931]"
                    />
                    {searchQuery && (
                        <div
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                            onClick={handleClear}
                        >
                            <ClearIcon style={{ color: "#C8CDCD" }} />
                        </div>
                    )}
                </div>
                <p className="text-[#C8CDCD] text-[12px] my-3">
                    ※ 英語で入力してください。 例: Barcelona
                </p>
            </div>
            <div className="mx-3">
                <h1 className="text-[#EEEEEE] text-[14px] font-bold">
                    全てのリーグ
                </h1>
                <ModalLeague />
                <h1 className="text-[#EEEEEE] text-[14px] font-bold">
                    主なチーム
                </h1>
            </div>
        </div>
    );
};
