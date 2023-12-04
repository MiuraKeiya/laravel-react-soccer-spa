import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export const FaCircleQuestionIcon = ({ id }) => {
    return (
        <FontAwesomeIcon
            icon={faCircleQuestion}
            className={`text-gray-400 cursor-default my-anchor-element-${id}`}
        />
    );
};
