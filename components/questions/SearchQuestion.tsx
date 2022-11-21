import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import {
    PoppinsMediumText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../StyledText";
import {
    BluePrimary50,
    darkPrimary,
    Gray,
    Green,
} from "../../constants/colorScheme";
import useColorScheme from "../../hooks/useColorScheme";
import { TruncateString } from "../../functions/TruncateString";
import { Text } from "../Themed";
import { timeAgo } from "../../functions/TimeAgo";

interface Props {
    avatar: string;
    answers: number;
    likes: number;
    name: string;
    username: string;
    question: string;
    subject: string;
    points: number;
    createdAt: string;
    onPress: () => void;
}

const SearchQuestion = ({
    avatar,
    answers,
    likes,
    name,
    username,
    question,
    subject,
    points,
    createdAt,
    onPress,
}: Props) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <Flex
                style={[
                    styles.container,
                    colorScheme === "dark"
                        ? styles.containerDark
                        : styles.containerLight,
                ]}
            >
                <Flex style={styles.subjectDetails}>
                    <PoppinsRegularText style={styles.details}>
                        {subject} • {points} Points • {timeAgo(createdAt)}
                    </PoppinsRegularText>
                </Flex>
                <Flex direction="row" align="center">
                    <Flex style={styles.userAvatar}>
                        <Image source={{ uri: avatar }} style={styles.avatar} />
                    </Flex>

                    <Flex flex={1} direction="row" align="center">
                        <View>
                            <PoppinsMediumText> {name} </PoppinsMediumText>
                            <PoppinsSemiBoldText
                                style={{ color: BluePrimary50 }}
                            >
                                @{username}
                            </PoppinsSemiBoldText>
                        </View>
                    </Flex>
                </Flex>
                <PoppinsRegularText style={styles.question}>
                    {TruncateString(question, 100)}
                </PoppinsRegularText>

                <PoppinsSemiBoldText
                    style={{ color: Green, marginTop: 5, marginBottom: 5 }}
                >
                    {answers > 1 ? `${answers} Answers` : `${answers} Answer`}·{" "}
                    {likes} Likes
                </PoppinsSemiBoldText>
            </Flex>
        </TouchableOpacity>
    );
};

export default SearchQuestion;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    containerDark: {
        backgroundColor: darkPrimary,
    },
    containerLight: {
        backgroundColor: "#efefef",
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
    subjectDetails: {
        // marginLeft: 5,
        // borderLeftWidth: 1,
        // paddingLeft: 10,
        // borderColor: Gray,

        paddingVertical: 5,
    },

    details: {
        fontSize: 12,
        color: Gray,
    },
});
