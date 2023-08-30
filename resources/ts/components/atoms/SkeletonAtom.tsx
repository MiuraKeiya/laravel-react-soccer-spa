import Skeleton from "@mui/material/Skeleton";

export const SkeletonAtom = ({
    variant,
    width,
    height,
    backgroundColor,
    borderRadius,
}) => {
    return (
        <Skeleton
            variant={variant}
            width={width}
            height={height}
            sx={{
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
        />
    );
};
