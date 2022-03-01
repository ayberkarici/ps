import React from "react";

const SkeletonLarge = () => {
    return (
        <svg
            role="img"
            width="451.7"
            height="382.08"
            aria-labelledby="loading-aria"
            viewBox="0 0 451.7 382.08"
            preserveAspectRatio="none"
        >
            <title id="loading-aria">Loading...</title>
            <rect
                x={0}
                y={0}
                width="100%"
                height="100%"
                clipPath="url(#clip-path)"
                style={{ fill: 'url("#fill")' }}
            />
            <defs>
                <clipPath id="clip-path">
                    <rect x={0} y={0} rx={2} ry={2} width={500} height={500} />
                </clipPath>
                <linearGradient id="fill">
                    <stop offset="0.599964" stopColor="#707070" stopOpacity={1}>
                        <animate
                            attributeName="offset"
                            values="-2; -2; 1"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="1.59996" stopColor="#6b6b6b" stopOpacity={1}>
                        <animate
                            attributeName="offset"
                            values="-1; -1; 2"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="2.59996" stopColor="#707070" stopOpacity={1}>
                        <animate
                            attributeName="offset"
                            values="0; 0; 3"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SkeletonLarge;
