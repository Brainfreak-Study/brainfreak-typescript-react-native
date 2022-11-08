import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowRightIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default ArrowRightIcon;
