import { Link } from "react-router-dom";

export const SerieA = ({ season }) => {
    return (
        <p className="text-[13px] px-3 py-3">
            <Link
                to={`/league/135/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Serie A
            </Link>
            は1898年に設立されました。イタリア国内で最も権威あるサッカーリーグであり、多くの名門クラブが参加しています。
            <br />
            当初は北イタリアのクラブが中心でしたが、現在は全国からクラブが参加しています。
            <Link
                to={`/league/135/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Serie A
            </Link>
            も他の多くのヨーロッパのサッカーリーグ同様、各クラブがホームとアウェーでの総当たり戦を行います。
            勝利には3ポイント、引き分けには1ポイントが与えられ、敗北には0ポイントです。ポイント合計によって順位が決まります。
            イタリアには多くの強豪クラブが存在し、
            <Link
                to={`/team/489/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                ACミラン（AC Milan）
            </Link>
            、
            <Link
                to={`/team/505/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                インテル・ミラノ（Inter Milan）
            </Link>
            、
            <Link
                to={`/team/496/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                ユヴェントス（Juventus）
            </Link>
            などがリーグを代表するクラブとして知られています。
            <br />
            <Link
                to={`/league/135/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Serie A
            </Link>
            には様々な激しいライバルリーが存在します。例えば、ミラノ・ダービー（
            <Link
                to={`/team/489/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                ACミラン
            </Link>
            vs{" "}
            <Link
                to={`/team/505/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                インテル・ミラノ
            </Link>
            ）やトリノ・ダービー（
            <Link
                to={`/team/503/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                トリノ
            </Link>{" "}
            vs{" "}
            <Link
                to={`/team/496/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                ユヴェントス
            </Link>
            ）などがあり、これらの対戦は非常に注目されます。 このリーグは
            その歴史とクオリティの高いサッカーで知られ、イタリア国内外の多くのサッカーファンに愛されています。
        </p>
    );
};
