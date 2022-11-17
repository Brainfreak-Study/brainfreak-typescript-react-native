import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import { PoppinsMediumText, PoppinsSemiBoldText } from "../StyledText";
import useColorScheme from "../../hooks/useColorScheme";
import {
    BluePrimary25,
    BluePrimary50,
    GrayLighter,
} from "../../constants/colorScheme";

interface Props {
    avatar: string;
    name: string;
    username: string;
}

const SearchUsers = ({ avatar, name, username }: Props) => {
    const colorScheme = useColorScheme();
    return (
        <Flex
            direction="row"
            align="center"
            justify="space-between"
            style={[
                styles.container,
                colorScheme === "dark"
                    ? styles.containerDark
                    : styles.containerLight,
            ]}
        >
            <Flex direction="row" align="center">
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <PoppinsMediumText style={styles.name}>
                        {name}
                    </PoppinsMediumText>
                    <PoppinsSemiBoldText style={styles.username}>
                        @{username}
                    </PoppinsSemiBoldText>
                </View>
            </Flex>
            <View style={styles.viewProfile}>
                <PoppinsMediumText style={styles.viewProfileText}>
                    View Profile
                </PoppinsMediumText>
            </View>
        </Flex>
    );
};

export default SearchUsers;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
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
        marginLeft: 5,
    },
    name: {
        fontSize: 14,
    },
    username: {
        fontSize: 12,
        color: BluePrimary50,
    },
    viewProfile: {
        backgroundColor: BluePrimary25,
        borderRadius: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    viewProfileText: {
        fontSize: 14,
    },
});
