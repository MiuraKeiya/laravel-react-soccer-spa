import { Message } from "../atoms/Message";

export const GamesMessage = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-[20rem]">
            <Message style={"text-[18px] text-[#C8CDCD]"}>{children}</Message>
        </div>
    );
};
