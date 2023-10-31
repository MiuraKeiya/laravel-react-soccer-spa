import { Icon } from "../../atoms/Icon";
import { Form } from "./Form";

export const Footer = () => {
    return (
        <>
            <div className="bg-[#111931] lg:h-[28rem] lg:flex items-center justify-center space-x-11 md:flex">
                <div className="pb-3 ml-11 pt-3 lg:ml-0">
                    <Icon
                        src="/images/footballleague.png"
                        alt="FootballLeague"
                        className="lg:h-[5rem] md:h-[2rem] h-[3rem]"
                    />
                    <p className="text-[#C8CDCD] lg:text-[14px] md:text-[7px] text-[10px] lg:pt-2 pt-1 ml-2">
                        海外サッカー情報サイト
                    </p>
                </div>
                <span className="text-white font-bold text-[17px] border-b dark:border-gray-700 pb-1">
                    当サイトについて
                </span>
                <div className="pb-3 pt-2">
                    <p className="text-[#EEEEEE]">
                        Football Leagueは、欧州5大リーグの
                        <br />
                        サッカー情報を閲覧できるサイトです。
                        <br />
                        APIを使用して情報を取得し、表示しています。
                        <br />
                        お好きなリーグやチームを保存して、
                        <br />
                        すぐに情報を閲覧することもできます。
                    </p>
                    <p className="text-[#EEEEEE] lg:pt-6 pt-3">
                        <span className="font-bold">サイト名:</span> Football
                        League
                    </p>
                    <p className="text-[#EEEEEE]">
                        <span className="font-bold">URL:</span> ここにURLが入る
                    </p>
                    <p className="text-[#bebcbc] text-[14px] lg:pt-6 pt-3">
                        当サイトを利用したことにより発生した、
                        <br />
                        いかなる損害及びトラブルに関して当方では
                        <br />
                        一切の責任と義務を負いかねますのでご了承下さい。
                        <br />
                        サイト内に使用されている情報や画像等の著作権は
                        <br />
                        各権利所有者に帰属します。
                    </p>
                </div>
                <span className="text-white font-bold text-[17px] border-b dark:border-gray-700 pb-1">
                    お問い合わせ
                </span>
                <Form />
            </div>
            <div className="bg-[#B0EE1B] h-14 flex items-center justify-center">
                <span className="text-brack font-semibold">
                    &copy; 2023 Football League
                </span>
            </div>
        </>
    );
};
