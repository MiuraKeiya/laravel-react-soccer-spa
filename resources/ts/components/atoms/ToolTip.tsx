import { Tooltip } from "react-tooltip";

export const ToolTip = ({children, id}) => {
    return (
        <Tooltip
            anchorSelect={`.my-anchor-element-${id}`}
            place="left"
        >
            {children}
        </Tooltip>
    );
};
