import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const QuestionIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M7 9.5h10M7 14.5h7"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default QuestionIcon;
