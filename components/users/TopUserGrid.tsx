import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import { PoppinsMediumText, PoppinsSemiBoldText } from "../StyledText";
import useColorScheme from "../../hooks/useColorScheme";
import { GrayLighter } from "../../constants/colorScheme";
import { TruncateString } from "../../functions/TruncateString";

interface Props {
    avatar: string;
    name: string;
    username: string;
    onPress: () => void;
}

const TopUserGrid = ({ avatar, name, username, onPress }: Props) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={onPress}>
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
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <PoppinsMediumText style={styles.name}>
                        {TruncateString(name, 10)}
                    </PoppinsMediumText>
                    <PoppinsSemiBoldText style={styles.username}>
                        @{username}
                    </PoppinsSemiBoldText>
                </View>
            </Flex>
        </TouchableOpacity>
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
