import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const LiveIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 18c1.26-1.67 2-3.75 2-6s-.74-4.33-2-6M4 6c-1.26 1.67-2 3.75-2 6s.74 4.33 2 6M16.8 15.6c.75-1 1.2-2.25 1.2-3.6s-.45-2.6-1.2-3.6M7.2 8.4C6.45 9.4 6 10.65 6 12s.45 2.6 1.2 3.6"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default LiveIcon;
