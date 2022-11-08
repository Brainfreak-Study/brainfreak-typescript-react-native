import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const PointsIcon = (props: SvgProps) => (
    <Svg viewBox="0 0 24 24" fill="none" width={24} height={24} {...props}>
        <Path
            d="M18.5 12.65v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7C5.5 15.77 8.41 18 12 18s6.5-2.23 6.5-5.35Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default PointsIcon;
