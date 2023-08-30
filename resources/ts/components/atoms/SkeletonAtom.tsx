import Skeleton from "@mui/material/Skeleton";

export const SkeletonAtom = ({
    variant,
    width,
    height,
    animation,
    backgroundColor,
    borderRadius,
}) => {
    return (
        <Skeleton
            variant={variant}
            width={width}
            height={height}
            animation={animation}
            sx={{
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
        />
    );
};
