import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import { SafeAreaScrollView, ScrollView } from "../../components/Themed";
import Container from "../../components/views/Container";
import DummyQuestions from "../../dummy-data/DummyQuestions";
import CommunityQuestion from "../../components/questions/CommunityQuestion";
import {
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../../components/StyledText";
import Flex from "../../components/views/Flex";
import {
    darkPrimary,
    darkTertiary,
    Gray,
    lightPrimary,
    lightSecondary,
} from "../../constants/colorScheme";
import useColorScheme from "../../hooks/useColorScheme";
import { timeAgo } from "../../functions/TimeAgo";

const QuestionScreen = ({
    navigation,
    route,
}: RootTabScreenProps<"Question">) => {
    const colorScheme = useColorScheme();
    const [question, setQuestion] = React.useState<typeof DummyQuestions[0]>();

    React.useEffect(() => {
        const questionId = route.params._id;
        const question = DummyQuestions.find(
            (question) => question._id === questionId
        );
        setQuestion(question);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <PoppinsRegularText
                style={[styles.details, { marginBottom: 10, marginTop: 5 }]}
            >
                Asked {timeAgo(question?.createdAt as string)}
            </PoppinsRegularText>
            <PoppinsRegularText>
                {question ? question.question : "Loading..."}
            </PoppinsRegularText>
            <Flex direction="row" align="center">
                <Image
                    source={{ uri: question?.author.avatar }}
                    style={styles.image}
                />
                <Flex style={styles.userDetails}>
                    <PoppinsRegularText style={styles.name}>
                        {question?.author.name}
                    </PoppinsRegularText>
                    <PoppinsSemiBoldText style={styles.username}>
                        @{question?.author.username}
                    </PoppinsSemiBoldText>
                </Flex>
            </Flex>

            <View style={styles.answers}>
                {question?.answers.map((answer) => (
                    <View
                        style={[
                            styles.answer,
                            colorScheme === "dark"
                                ? styles.answerDark
                                : styles.answerLight,
                        ]}
                        key={answer._id}
                    >
                        <PoppinsRegularText>{answer.answer}</PoppinsRegularText>
                        <Flex direction="row" align="center">
                            <Image
                                source={{ uri: answer.author.avatar }}
                                style={styles.image}
                            />
                            <Flex style={styles.userDetails}>
                                <PoppinsRegularText style={styles.name}>
                                    {answer.author.name}
                                </PoppinsRegularText>
                                <PoppinsSemiBoldText style={styles.username}>
                                    @{answer.author.username}
                                </PoppinsSemiBoldText>
                            </Flex>
                        </Flex>
                        <PoppinsRegularText
                            style={[styles.details, { marginTop: 10 }]}
                        >
                            Answered {timeAgo(answer?.createdAt as string)}
                        </PoppinsRegularText>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default QuestionScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderColor: darkPrimary,
        borderWidth: 2,
    },
    userDetails: {
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
    },
    username: {
        fontSize: 12,
    },
    answers: {
        marginVertical: 20,
    },
    answer: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    answerDark: {
        backgroundColor: darkPrimary,
    },
    answerLight: {
        backgroundColor: lightSecondary,
    },
    details: {
        fontSize: 12,
        color: Gray,
    },
});
