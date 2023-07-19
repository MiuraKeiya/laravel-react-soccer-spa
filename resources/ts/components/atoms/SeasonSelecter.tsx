import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export const SeasonSelecter = () => {
    const navigate = useNavigate();

    const { leagueId, season } = useParams();

    const handleYearChange = (e) => {
        navigate(`/ranking/${leagueId}/${e.target.value}`);
    };

    return (
        <select
            className="bg-black rounded text-[#C8CDCD] text-[13px] p-1 px-2 cursor-pointer hover:text-[#EEEEEE]"
            onChange={handleYearChange}
            value={season}
        >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
        </select>
    );
};
