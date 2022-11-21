import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Flex from "../views/Flex";
import SearchQuestion from "../questions/SearchQuestion";
import { PoppinsRegularText } from "../StyledText";
import Container from "../views/Container";
import { ScrollView } from "../Themed";
import SearchQuestionsData from "../../dummy-data/DummyQuestions";
import { useNavigation } from "@react-navigation/native";

const QuestionSearch = () => {
    const navigation = useNavigation();
    return (
        <ScrollView lightColor="#fff" darkColor="#000" style={styles.container}>
            {SearchQuestionsData.map((question) => (
                <SearchQuestion
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
                    onPress={() => {
                        navigation.navigate("Question", question);
                    }}
                />
            ))}
            <View style={styles.footer}></View>
        </ScrollView>
    );
};

export default QuestionSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
    },
    footer: {
        height: 30,
    },
});
