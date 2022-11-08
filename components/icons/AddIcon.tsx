import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const AddIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
        <Path
            d="M6 12h12M12 18V6"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default AddIcon;
