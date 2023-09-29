import { useEffect, useState } from "react";

export const useErrors = (...errors) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        for (let i = 0; i < errors.length; i++) {
            if (errors[i]) {
                setError(errors[i]);
                break;
            }
        }
    }, errors);

    return error;
};
