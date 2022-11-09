import { View, ViewProps } from "react-native";
import React from "react";

interface IFlex extends ViewProps {
    children: React.ReactNode;
    direction?: "row" | "column";
    justify?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    grow?: number;
    shrink?: number;
    basis?: number;
    order?: number;
    style?: any;
    padding?: number;
    margin?: number;
    flex?: number;
}

const Flex = (props: IFlex): React.ReactElement<IFlex> => {
    return (
        <View
            style={[
                props.direction && { flexDirection: props.direction },
                props.justify && { justifyContent: props.justify },
                props.align && { alignItems: props.align },
                props.wrap && { flexWrap: props.wrap },
                props.grow && { flexGrow: props.grow },
                props.shrink && { flexShrink: props.shrink },
                props.basis && { flexBasis: props.basis },
                props.order && { order: props.order },
                props.padding && { padding: props.padding },
                props.margin && { margin: props.margin },
                props.flex && { flex: props.flex },
                props.style,
            ]}
        >
            {props.children}
        </View>
    );
};

export default Flex;
