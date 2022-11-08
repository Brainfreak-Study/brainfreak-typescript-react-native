import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const AddCircleIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default AddCircleIcon;
