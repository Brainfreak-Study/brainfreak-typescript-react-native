import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SendIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SendIcon;
