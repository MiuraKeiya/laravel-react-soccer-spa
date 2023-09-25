import axios from "axios";

export const useEmailVerificationApi = () => {
    const sendEmail = async () => {
        try {
            const response = await axios.post(
                "/api/email/verification-notification"
            );
            console.log(response.data);
        } catch (error) {
            throw error;
        }
    };

    return {
        sendEmail,
    };
};
