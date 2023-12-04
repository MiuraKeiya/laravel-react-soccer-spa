import { useState } from "react";
import axios from "axios";

export const useGoogleLoginApi = () => {
    const googleCallback = async () => {
        try {
            const response = await axios.get("/api/login/google");

            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return { googleCallback };
};
