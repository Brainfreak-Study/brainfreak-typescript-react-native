import { View, ViewProps } from "react-native";
import React from "react";

interface Props extends ViewProps {
    children: React.ReactNode;
}
const MenuList = ({ children, ...props }: Props) => {
    return <View style={props.style}>{children}</View>;
};
export default MenuList;
