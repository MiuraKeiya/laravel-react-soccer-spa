import * as pieChartConstants from "../../../../constants/pieChart";

export const PieChart = ({ data, animationProgress }) => {
    const {
        PIE_CHART_WIDTH,
        PIE_CHART_HEIGHT,
        PIE_CHART_RADIUS,
        POSITION_COLORS,
        CIRCLE_DEGREES,
        HALF_CIRCLE_DEGREES,
        START_ANGLE,
        PERCENTAGE_BASE,
        FULL_CIRCLE_FLAG,
        ZERO_PERCENT,
    } = pieChartConstants;

    let startAngle = START_ANGLE;

    return (
        <svg width={PIE_CHART_WIDTH} height={PIE_CHART_HEIGHT}>
            <circle
                cx={PIE_CHART_RADIUS}
                cy={PIE_CHART_RADIUS}
                r={PIE_CHART_RADIUS}
                fill="rgba(255, 255, 255, 0.15)"
            />

            {data.map((slice, index) => {
                const animatedEndAngle =
                    startAngle +
                    (slice.value / PERCENTAGE_BASE) *
                        CIRCLE_DEGREES *
                        animationProgress;
                const positionColor =
                    POSITION_COLORS[slice.label] || POSITION_COLORS.Default;

                const pathData = `
    M ${PIE_CHART_RADIUS} ${PIE_CHART_RADIUS}
    L ${
        PIE_CHART_RADIUS +
        PIE_CHART_RADIUS *
            Math.cos((startAngle * Math.PI) / HALF_CIRCLE_DEGREES)
    } ${
                    PIE_CHART_RADIUS +
                    PIE_CHART_RADIUS *
                        Math.sin((startAngle * Math.PI) / HALF_CIRCLE_DEGREES)
                }
    A ${PIE_CHART_RADIUS} ${PIE_CHART_RADIUS} ${ZERO_PERCENT} ${
                    animatedEndAngle - startAngle > HALF_CIRCLE_DEGREES
                        ? FULL_CIRCLE_FLAG
                        : ZERO_PERCENT
                } ${FULL_CIRCLE_FLAG}
    ${
        PIE_CHART_RADIUS +
        PIE_CHART_RADIUS *
            Math.cos((animatedEndAngle * Math.PI) / HALF_CIRCLE_DEGREES)
    } ${
                    PIE_CHART_RADIUS +
                    PIE_CHART_RADIUS *
                        Math.sin(
                            (animatedEndAngle * Math.PI) / HALF_CIRCLE_DEGREES
                        )
                }
    Z
  `;

                startAngle = animatedEndAngle;

                return (
                    <g key={index}>
                        <path d={pathData} fill={positionColor} />
                    </g>
                );
            })}
        </svg>
    );
};
