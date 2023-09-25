import { RegisterTemplate } from "../../components/templates/Auth/RegisterTemplate";
import { EmailVerification } from "../../components/organisms/Auth/EmailVerification";

export const EmailVerificationPage = () => {
    return (
        <RegisterTemplate>
            <EmailVerification />
        </RegisterTemplate>
    );
};
