import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import React from "react";
import { PoppinsRegularText } from "./StyledText";

interface SeparatorProps extends ViewProps {
    text?: string;
}

const Seprator = ({ text, style, ...props }: SeparatorProps) => {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.sepratorContainer, style]} {...props}>
            <View
                style={[
                    styles.seprator,
                    colorScheme === "dark"
                        ? styles.sepratorDark
                        : styles.sepratorLight,
                ]}
            />
            <PoppinsRegularText style={styles.sepratorText}>
                {text}
            </PoppinsRegularText>
            <View
                style={[
                    styles.seprator,
                    colorScheme === "dark"
                        ? styles.sepratorDark
                        : styles.sepratorLight,
                ]}
            />
        </View>
    );
};

export default Seprator;

const styles = StyleSheet.create({
    sepratorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    seprator: {
        flex: 1,
        height: 1,
    },
    sepratorDark: {
        backgroundColor: "#242424",
    },
    sepratorLight: {
        backgroundColor: "#ccc",
    },
    sepratorText: { color: "#828895", paddingHorizontal: 10 },
});
