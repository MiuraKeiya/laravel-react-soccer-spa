import { Link } from "react-router-dom";

export const LaLiga = ({ season }) => {
    return (
        <p className="text-[13px] px-3 py-3">
            <Link
                to={`/league/140/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                La Liga(リーガエスパニョーラ)
            </Link>
            は1929年に設立されました。当初は10クラブで構成されていましたが、現在は20クラブからなるリーグとなっています。
            <br />
            スペインリーグは、数々の名門クラブや世界的なスター選手を輩出し、国内外で高い評価を受けています。
            <br />
            <Link
                to={`/league/140/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                La Liga(リーガエスパニョーラ)
            </Link>
            は、各クラブがホームとアウェーで総当たり戦を行うラウンドロビン形式のリーグ戦です。
            <br />
            勝利には3ポイント、引き分けには1ポイントが与えられ、敗北には0ポイントです。
            <br />
            ポイント合計によって順位が決まります。
            <br />
            <Link
                to={`/team/529/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                バルセロナ（FC Barcelona）
            </Link>
            と
            <Link
                to={`/team/541/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                レアル・マドリード（Real Madrid）
            </Link>
            はリーグを代表する2つの強豪クラブで、両クラブは数々の国内外のタイトルを争っています。
            他にも
            <Link
                to={`/team/530/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                アトレティコ・マドリード（Atletico Madrid）
            </Link>
            など、多くのクラブが激しい競争を繰り広げています。
        </p>
    );
};
