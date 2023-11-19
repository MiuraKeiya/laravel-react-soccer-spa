import { SkeletonAtom } from "../../../atoms/SkeletonAtom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const TitleLoading = () => {
    return (
        <div className="text-gray-500 my-[4px] text-[12px] font-bold flex items-center">
            <p className="text-[#7A84FF]">ホーム</p>
            <ArrowRightIcon />
            <SkeletonAtom
                variant={"text"}
                width={70}
                height={20}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
            <ArrowRightIcon />
            <SkeletonAtom
                variant={"text"}
                width={150}
                height={20}
                backgroundColor={"#4b5563"}
                borderRadius={""}
            />
        </div>
    );
};
