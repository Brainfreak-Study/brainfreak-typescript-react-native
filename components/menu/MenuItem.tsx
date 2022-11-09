import { StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import React from "react";
import {
    Black,
    GrayExtraDark,
    GrayLight,
    White,
} from "../../constants/colorScheme";
import { PoppinsMediumText } from "../StyledText";
import Flex from "../views/Flex";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import useColorScheme from "../../hooks/useColorScheme";

interface MenuItemProps extends ViewProps {
    showArrow?: boolean;
    text: string;
    icon: React.ReactNode;
    onPress?: () => void;
    textColor?: string;
    rightIconColor?: string;
}

const MenuItem = ({
    text,
    icon,
    showArrow = true,
    onPress,
    textColor,
    rightIconColor,
    ...props
}: MenuItemProps) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity
            style={[
                styles.menuItem,
                colorScheme === "dark"
                    ? styles.menuItemDark
                    : styles.menuItemLight,
            ]}
            onPress={onPress}
            {...props}
        >
            <Flex direction="row">
                {icon}
                <PoppinsMediumText
                    style={[
                        styles.menuItemText,
                        textColor ? { color: textColor } : undefined,
                    ]}
                >
                    {text}
                </PoppinsMediumText>
            </Flex>
            {showArrow && (
                <ArrowRightIcon
                    color={
                        rightIconColor
                            ? rightIconColor
                            : colorScheme === "dark"
                            ? White
                            : Black
                    }
                />
            )}
        </TouchableOpacity>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
    },
    menuItemLight: {
        borderBottomColor: GrayLight,
    },
    menuItemDark: {
        borderBottomColor: GrayExtraDark,
    },

    menuItemText: {
        fontSize: 14,
        marginLeft: 10,
        alignSelf: "center",
    },
});
