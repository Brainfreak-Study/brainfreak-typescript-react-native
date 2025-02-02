import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import {
    PoppinsMediumText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../StyledText";
import EyeIcon from "../icons/EyeIcon";
import { BluePrimary50, Green } from "../../constants/colorScheme";
import { TruncateString } from "../../functions/TruncateString";

interface Props {
    avatar: string;
    question: string;
    name: string;
    username: string;
    views: number;
}

const LiveQuestion = ({ avatar, question, name, username, views }: Props) => {
    return (
        <Flex style={styles.container}>
            <Flex direction="row" align="center">
                <Flex style={styles.userAvatar}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                </Flex>

                <Flex
                    flex={1}
                    direction="row"
                    align="center"
                    justify="space-between"
                >
                    <View>
                        <PoppinsMediumText>{name}</PoppinsMediumText>
                        <PoppinsSemiBoldText style={{ color: BluePrimary50 }}>
                            @{username}
                        </PoppinsSemiBoldText>
                    </View>
                    <Flex
                        direction="row"
                        align="center"
                        style={styles.liveCount}
                    >
                        <EyeIcon color="#fff" />
                        <PoppinsRegularText style={styles.liveCountText}>
                            {views}
                        </PoppinsRegularText>
                    </Flex>
                </Flex>
            </Flex>
            <PoppinsRegularText style={styles.question}>
                {TruncateString(question, 100)}
            </PoppinsRegularText>
        </Flex>
    );
};

export default LiveQuestion;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flex: 1,
    },
    userAvatar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    question: {
        marginTop: 5,
        fontSize: 14,
    },
    liveCount: {
        backgroundColor: Green,
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
    liveCountText: {
        color: "#fff",
        marginLeft: 5,
    },
});
