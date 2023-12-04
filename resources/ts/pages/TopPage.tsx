import { TopTemplate } from "../components/templates/Top/TopTemplate";
import { Top } from "../components/organisms/Top/Top";
import { TopFooter } from "../components/atoms/footer/TopFooter";

export const TopPage = () => {
    return (
        <TopTemplate footer={<TopFooter />}>
            <Top />
        </TopTemplate>
    );
};
