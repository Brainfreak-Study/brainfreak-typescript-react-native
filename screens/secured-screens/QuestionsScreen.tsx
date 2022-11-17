import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import { SafeAreaScrollView } from "../../components/Themed";
import Container from "../../components/views/Container";
import DummyQuestions from "../../dummy-data/DummyQuestions";
import CommunityQuestion from "../../components/questions/CommunityQuestion";

const QuestionsScreen = ({ navigation }: RootTabScreenProps<"Questions">) => {
    return (
        <SafeAreaScrollView style={{ flex: 1 }}>
            {DummyQuestions.map((question) => (
                <CommunityQuestion
                    key={question._id}
                    avatar={question.avatar}
                    answers={question.answers}
                    likes={question.likes}
                    name={question.name}
                    username={question.username}
                    question={question.question}
                />
            ))}
        </SafeAreaScrollView>
    );
};

export default QuestionsScreen;

const styles = StyleSheet.create({});
