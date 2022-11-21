import { StyleSheet } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import { SafeAreaScrollView } from "../../components/Themed";
import DummyQuestions from "../../dummy-data/DummyQuestions";
import CommunityQuestion from "../../components/questions/CommunityQuestion";

const QuestionsScreen = ({ navigation }: RootTabScreenProps<"Questions">) => {
    return (
        <SafeAreaScrollView style={styles.container}>
            {DummyQuestions.map((question) => (
                <CommunityQuestion
                    key={question._id}
                    avatar={question.author.avatar}
                    answers={question.answers.length}
                    likes={question.likes}
                    name={question.author.name}
                    username={question.author.username}
                    question={question.question}
                    subject={question.subject}
                    points={question.points}
                    createdAt={question.createdAt}
                    onPress={() => navigation.navigate("Question", question)}
                />
            ))}
        </SafeAreaScrollView>
    );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
});
