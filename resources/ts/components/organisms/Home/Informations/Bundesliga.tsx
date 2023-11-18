import { Link } from "react-router-dom";

export const Bundesliga = ({ season }) => {
    return (
        <p className="text-[13px] px-3 py-3">
            <Link
                to={`/league/78/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Bundeslig(ブンデスリーガ)
            </Link>
            は1963年に設立されました。これにより、東西ドイツが統一される前からドイツ全土で統一的なプロサッカーリーグが成立しました。
            当初は16クラブで構成されていましたが、現在は18クラブからなるリーグとなっています。
            <br />
            <Link
                to={`/league/78/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Bundeslig(ブンデスリーガ)
            </Link>
            も他の多くのヨーロッパのサッカーリーグ同様、各クラブがホームとアウェーでの総当たり戦を行います。
            <br />
            勝利には3ポイント、引き分けには1ポイントが与えられ、敗北には0ポイントです。ポイント合計によって順位が決まります。
            <br />
            <Link
                to={`/team/157/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                バイエルン・ミュンヘン（FC Bayern Munich）
            </Link>
            はリーグを代表する強豪クラブで、国内外で数多くのタイトルを獲得しています。特に近年、国内リーグでの支配力が強まっています。
            他にも
            <Link
                to={`/team/165/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                ボルシア・ドルトムント（Borussia Dortmund）
            </Link>
            や
            <Link
                to={`/team/173/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                RBライプツィヒ（RB Leipzig）
            </Link>
            など、激しい競争が繰り広げられています。
            <br />
            そのため、ドイツ代表の多くの選手が
            <Link
                to={`/league/78/season/${season}`}
                className="text-[#7d40b3] hover:underline"
            >
                Bundeslig(ブンデスリーガ)
            </Link>
            で才能を開花させ、国際舞台での成功を収めています。
        </p>
    );
};
