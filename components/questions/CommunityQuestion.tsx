import { StyleSheet, View, Image } from "react-native";
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
import Button from "../buttons/Button";
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

const CommunityQuestion = ({
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

                <Flex
                    flex={1}
                    direction="row"
                    align="center"
                    justify="space-between"
                >
                    <View>
                        <PoppinsMediumText> {name} </PoppinsMediumText>
                        <PoppinsSemiBoldText style={{ color: BluePrimary50 }}>
                            @{username}
                        </PoppinsSemiBoldText>
                    </View>
                    {/* <Flex
                        direction="row"
                        align="center"
                        style={styles.liveCount}
                    >
                        <EyeIcon color="#fff" />
                        <PoppinsRegularText style={styles.liveCountText}>
                            1.2k
                        </PoppinsRegularText>
                    </Flex> */}
                </Flex>
            </Flex>
            <PoppinsRegularText style={styles.question}>
                {TruncateString(question, 100)}
            </PoppinsRegularText>

            <Flex direction="row" align="center" justify="space-between">
                <PoppinsSemiBoldText
                    style={{ color: Green, marginTop: 5, marginBottom: 5 }}
                >
                    {answers > 1 ? `${answers} Answers` : `${answers} Answer`}·{" "}
                    {likes} Likes
                </PoppinsSemiBoldText>
                <Button
                    text="Give Answer"
                    style={styles.giveAnswerButton}
                    onPress={onPress}
                />
            </Flex>
        </Flex>
    );
};

export default CommunityQuestion;

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
    giveAnswerButton: {
        backgroundColor: "transparent",
        borderColor: Green,
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
    },
    subjectDetails: {
        paddingVertical: 5,
    },

    details: {
        fontSize: 12,
        color: Gray,
    },
});
