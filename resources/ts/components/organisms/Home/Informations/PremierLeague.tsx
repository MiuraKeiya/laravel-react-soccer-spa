import { Link } from "react-router-dom";

export const PremierLeague = ({ season }) => {
    return (
        <p className="text-[13px] px-3 py-3">
            <Link
                to={`/league/39/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                プレミアリーグ（Premier League）
            </Link>
            は、イングランドのサッカークラブによる最上位のプロフェッショナルサッカーリーグで、世界でも最も観客動員数が多く、競争が激しいリーグの一つです。
            <Link
                to={`/league/39/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                プレミアリーグ（Premier League）
            </Link>
            は1992年に設立され、それ以前はFootball League First
            Divisionとして知られていました。設立当初は22クラブで構成され、その後20クラブに変更され、現在も20クラブで構成されています。
            <br />
            2000年代には、
            <Link
                to={`/team/33/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                マンチェスター・U
            </Link>
            、
            <Link
                to={`/team/49/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                チェルシー
            </Link>
            、
            <Link
                to={`/team/42/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                アーセナル
            </Link>
            、
            <Link
                to={`/team/40/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                リヴァプール
            </Link>
            の4クラブが毎年優勝争いを繰り広げていることから「ビッグ4」と呼ばれています。
            <br />
            <Link
                to={`/league/39/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                プレミアリーグ（Premier League）
            </Link>
            は各クラブが38試合を戦うラウンドロビン形式のリーグ戦を採用しています。
            <br />
            ホームアンドアウェーの方式で行われ、1シーズンは通常8月から5月まで続きます。
            勝利には3ポイント、引き分けには1ポイントが与えられ、敗北には0ポイントです。
            <br />
            シーズン終了時に獲得した総ポイントで順位が決定されます。
        </p>
    );
};
