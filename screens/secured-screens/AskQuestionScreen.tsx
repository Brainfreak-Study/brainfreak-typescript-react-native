import React from "react";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const AskQuestion = ({ navigation }: RootTabScreenProps<"AskQuestion">) => {
    return (
        <View>
            <Text>Ask Question</Text>
        </View>
    );
};

export default AskQuestion;
