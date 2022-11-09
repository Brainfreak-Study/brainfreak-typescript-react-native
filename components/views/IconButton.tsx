import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";

interface IButtonProps extends ViewProps {
    icon: React.FunctionComponent<any>;
    color: string;
    iconColor?: string;
}

const IconButton = ({
    icon: Icon,
    color,
    iconColor,
    ...props
}: IButtonProps) => {
    return (
        <View
            style={[styles.button, { backgroundColor: color }, props.style]}
            {...props}
        >
            <Icon color={iconColor} />
        </View>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
