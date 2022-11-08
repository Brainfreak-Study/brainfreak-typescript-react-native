import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import { PoppinsMediumText, PoppinsSemiBoldText } from "../StyledText";
import useColorScheme from "../../hooks/useColorScheme";
import { GrayLighter } from "../../constants/colorScheme";

const TopUserGrid = () => {
    const colorScheme = useColorScheme();
    return (
        <Flex
            align="center"
            justify="center"
            padding={10}
            style={[
                styles.container,
                colorScheme === "dark"
                    ? styles.containerDark
                    : styles.containerLight,
            ]}
        >
            <Image
                source={require("../../assets/images/users/user.jpg")}
                style={styles.avatar}
            />
            <View style={styles.infoContainer}>
                <PoppinsMediumText style={styles.name}>
                    Eklavya Singh
                </PoppinsMediumText>
                <PoppinsSemiBoldText style={styles.username}>
                    @eklavya
                </PoppinsSemiBoldText>
            </View>
        </Flex>
    );
};

export default TopUserGrid;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        marginLeft: 0,
        width: 150,
    },
    containerDark: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    containerLight: {
        backgroundColor: GrayLighter,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infoContainer: {
        marginTop: 5,
    },
    name: {
        fontSize: 14,
        textAlign: "center",
    },
    username: {
        fontSize: 12,
        textAlign: "center",
    },
});
