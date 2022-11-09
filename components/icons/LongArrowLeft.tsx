import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const LongArrowLeft = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default LongArrowLeft;
