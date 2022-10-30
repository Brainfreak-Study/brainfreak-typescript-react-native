//Header With Back

import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { PoppinsBoldText } from "../StyledText";

interface HeaderWithBackProps {
    title: string;
    onPress: () => void;
}

const HeaderWithBack = ({ title, onPress }: HeaderWithBackProps) => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPress}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={colorScheme === "dark" ? "#fff" : "#000"}
                />
            </TouchableOpacity>
            <PoppinsBoldText style={styles.headerText}>{title}</PoppinsBoldText>
        </View>
    );
};

export default HeaderWithBack;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
    },
});
