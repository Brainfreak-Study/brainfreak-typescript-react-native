import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";

const QuestionsScreen = ({ navigation }: RootTabScreenProps<"Questions">) => {
    return (
        <View>
            <Text>QuestionsScreen</Text>
        </View>
    );
};

export default QuestionsScreen;

const styles = StyleSheet.create({});
