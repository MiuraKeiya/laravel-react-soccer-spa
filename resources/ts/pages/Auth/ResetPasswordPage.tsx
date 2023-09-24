import { LoginTemplate } from "../../components/templates/Auth/LoginTemplate";
import { ResetPassword } from "../../components/organisms/Auth/ResetPassword";

export const ResetPasswordPage = () => {
    return (
        <LoginTemplate>
            <ResetPassword />
        </LoginTemplate>
    );
};
