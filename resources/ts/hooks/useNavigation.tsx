import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    };

    return goTo;
};
