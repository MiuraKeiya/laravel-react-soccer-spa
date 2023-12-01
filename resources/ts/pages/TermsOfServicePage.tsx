import { TermsOfServiceTemplate } from "../components/templates/Tos/TermsOfServiceTemplate";
import { TosFooter } from "../components/organisms/TermsOfService/TosFooter";
import { TermsOfService } from "../components/organisms/TermsOfService/TermsOfService";
import { TosHeader } from "../components/organisms/TosHeader";
import { ScrollRestoration } from "react-router-dom";

export const TermsOfServicePage = () => {
    return (
        <TermsOfServiceTemplate header={<TosHeader />} footer={<TosFooter />}>
            <ScrollRestoration />
            <TermsOfService />
        </TermsOfServiceTemplate>
    );
};
