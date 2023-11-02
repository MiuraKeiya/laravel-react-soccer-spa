import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import config from "../../config";

export const SeasonSelecter = ({ baseRoute, id, season }) => {
    const [seasonOptions, setSeasonOptions] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // ここでconfigからシーズン選択肢を生成する
        const options = Object.keys(config).map((key) => ({
            value: config[key],
            label: config[key],
        }));

        setSeasonOptions(options);

        setSelectedSeason(season);
    }, [season]);

    const handleSeasonChange = (event) => {
        const newSeason = event.target.value;
        setSelectedSeason(newSeason);

        navigate(`${baseRoute}/${id}/season/${newSeason}`,{ replace: true });

        // ページを再読み込み
        window.location.reload();
    };

    return (
        <FormControl
            variant="filled"
            size="small"
            sx={{
                m: 3,
                minWidth: 90,
                backgroundColor: "#111931",
                "@media (min-width: 640px)": {
                    minWidth: 100, // sm スクリーンサイズ以上で minWidth を変更
                },
            }}
        >
            <InputLabel
                id="demo-simple-select-filled-label"
                sx={{ color: "white" }}
            >
                シーズン
            </InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectedSeason}
                onChange={handleSeasonChange}
                sx={{
                    color: "white",
                    "& .MuiSelect-icon": {
                        color: "white",
                    },
                }}
            >
                {seasonOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
