import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const SearchError = ({searchQuery}) => {
    return (
        <div className="py-16 ml-2">
            <div className="text-[#C8CDCD] text-[13px] font-bold">
                <span className="text-white">"{searchQuery}"</span>
                に一致するチームは見つかりませんでした。
            </div>
            <div className="text-[#C8CDCD] text-[13px] py-2 flex items-center space-x-1">
                <div className="text-[12px]">
                    <HelpOutlineIcon style={{ fontSize: "18px" }} />
                </div>
                <p>
                    ヒント:
                    別のキーワードを試してみたり、スペルを確認してみてください。
                </p>
            </div>
        </div>
    );
};
