import { useInView } from "react-intersection-observer";

export const GaugeBar = ({ homeValue, awayValue, type }) => {
    const homeNumericValue = parseFloat(homeValue) || 0;
    const awayNumericValue = parseFloat(awayValue) || 0;

    const totalValue = homeNumericValue + awayNumericValue;
    const homePercentage = (homeNumericValue / totalValue) * 100;
    const awayPercentage = (awayNumericValue / totalValue) * 100;

    const showHomeGauge = homeNumericValue !== 0;
    const showAwayGauge = awayNumericValue !== 0;

    // バーの色を決定
    const homeBarColor =
        homeNumericValue < awayNumericValue
            ? "rgba(231, 59, 59, 0.3)"
            : "#E73B3B";
    const awayBarColor =
        homeNumericValue > awayNumericValue
            ? "rgba(70, 194, 82, 0.3)"
            : "#46C252";

    const [homeRef, homeInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [awayRef, awayInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className="sm:mx-5 mx-3">
            <div className="flex justify-between items-center my-2">
                <span className="text-white text-[14px] font-bold">
                    {homeValue || 0}
                </span>
                <span className="text-[14px] font-bold text-white">{type}</span>
                <span className="text-right text-white text-[14px] font-bold">
                    {awayValue || 0}
                </span>
            </div>
            <div className="flex justify-center items-center">
                <div
                    ref={homeRef}
                    className="rotate-180 bg-[#060707] h-[10px] w-full rounded-r-lg overflow-hidden"
                >
                    {showHomeGauge && (
                        <div
                            className={`rounded-r-lg h-full ${
                                homeInView ? "animate-flow-left" : ""
                            }`}
                            style={{
                                width: `${homePercentage}%`,
                                background: homeBarColor,
                            }}
                        ></div>
                    )}
                </div>
                <div
                    ref={awayRef}
                    className="bg-[#060707] h-[10px] w-full rounded-r-lg overflow-hidden"
                >
                    {showAwayGauge && (
                        <div
                            className={`rounded-r-lg h-full ${
                                awayInView ? "animate-flow-left" : ""
                            }`}
                            style={{
                                width: `${awayPercentage}%`,
                                background: awayBarColor,
                            }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
};
