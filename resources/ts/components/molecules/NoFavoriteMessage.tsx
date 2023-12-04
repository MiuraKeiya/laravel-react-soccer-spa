import { Message } from "../atoms/Message";
import { AddPlusIcon } from "../atoms/AddIPlusIcon";
import SearchIcon from "@mui/icons-material/Search";

export const NoFavoriteMessage = ({text}) => {
    return (
        <div className="ml-3">
            <Message style={"text-[#C8CDCD]"}>
                {text}を追加するには
                <br />
                <AddPlusIcon style={"text-[#EEEEEE] pb-1"} />
                又は
                <SearchIcon />
                から追加し
                <br />
                てください。
            </Message>
        </div>
    );
};
