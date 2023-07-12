import { useInView } from "react-intersection-observer";

export const GaugeBar = ({ homeValue, awayValue, type }) => {
    const homeNumericValue = parseFloat(homeValue) || 0;
    const awayNumericValue = parseFloat(awayValue) || 0;

    const totalValue = homeNumericValue + awayNumericValue;
    const homePercentage = (homeNumericValue / totalValue) * 100;
    const awayPercentage = (awayNumericValue / totalValue) * 100;

    const showHomeGauge = homeNumericValue !== 0;
    const showAwayGauge = awayNumericValue !== 0;

    const [homeRef, homeInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [awayRef, awayInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div>
            <div className="flex justify-between items-center mx-5 my-2">
                <span className="text-[#FFFFFF] text-[12px] font-bold">
                    {homeValue || 0}
                </span>
                <span className="text-[12px] font-bold text-[#FFFFFF]">
                    {type}
                </span>
                <span className="text-right text-[#FFFFFF] text-[12px] font-bold">
                    {awayValue || 0}
                </span>
            </div>
            <div className="flex justify-between items-center mx-5 mb-7">
                <div
                    ref={homeRef}
                    className="rotate-180 bg-gray-200 h-[8px] w-[250px] rounded-r-lg overflow-hidden"
                >
                    {showHomeGauge && (
                        <div
                            className={`rounded-r-lg bg-[#2e42f7] h-full ${
                                homeInView ? "animate-flow-left" : ""
                            }`}
                            style={{ width: `${homePercentage}%` }}
                        ></div>
                    )}
                </div>
                <div
                    ref={awayRef}
                    className="bg-gray-200 h-[8px] w-[250px] rounded-r-lg overflow-hidden"
                >
                    {showAwayGauge && (
                        <div
                            className={`rounded-r-lg bg-[#2ffb2c] h-full ${
                                awayInView ? "animate-flow-left" : ""
                            }`}
                            style={{ width: `${awayPercentage}%` }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
};
