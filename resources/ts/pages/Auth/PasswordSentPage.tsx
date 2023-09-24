import { LoginTemplate } from "../../components/templates/Auth/LoginTemplate";
import { PasswordSent } from "../../components/organisms/Auth/PasswordSent";

export const PasswordSentPage = () => {
    return (
        <LoginTemplate>
            <PasswordSent />
        </LoginTemplate>
    );
};
