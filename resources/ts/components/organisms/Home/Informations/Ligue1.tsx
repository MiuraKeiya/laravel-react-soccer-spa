import { Link } from "react-router-dom";

export const Ligue1 = ({ season }) => {
    return (
        <p className="text-[13px] px-3 py-3">
            <Link
                to={`/league/61/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                リーグ・アン(Ligue 1)
            </Link>
            は1932年に創設されました。フランス国内のクラブが参加し、リーグ内で優れたパフォーマンスを発揮することが求められています。
            特に
            <Link
                to={`/team/85/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                PSG（パリ・サンジェルマン）
            </Link>
            などが近年の強豪クラブとして脚光を浴びています。
            <br />
            <Link
                to={`/league/61/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                リーグ・アン(Ligue 1)
            </Link>
            も他の多くのヨーロッパのサッカーリーグ同様、各クラブがホームとアウェーでの総当たり戦を行います。
            勝利には3ポイント、引き分けには1ポイントが与えられ、敗北には0ポイントです。ポイント合計によって順位が決まります。
            <br />
            フランスリーグは若手選手の発掘と成長に注力しており、多くの有望な若手がトップクラブでプレーしています。
            フランス代表はこれらの若手選手を中心に構築され、国際舞台での成功を収めています。
        </p>
    );
};
