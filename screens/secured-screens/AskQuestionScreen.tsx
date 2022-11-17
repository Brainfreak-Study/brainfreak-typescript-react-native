import React from "react";
import {
    Text,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from "react-native";
import {
    actions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";
import Button from "../../components/buttons/Button";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const AskQuestion = ({ navigation }: RootTabScreenProps<"AskQuestion">) => {
    const richText = React.useRef<any>();

    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <RichToolbar
                        editor={richText}
                        actions={[
                            actions.insertImage,
                            actions.setBold,
                            actions.setItalic,
                            actions.insertBulletsList,
                            actions.insertOrderedList,
                            actions.insertLink,
                            actions.keyboard,
                            actions.setStrikethrough,
                            actions.setUnderline,
                            actions.removeFormat,
                            actions.insertVideo,
                            actions.checkboxList,
                            actions.undo,
                            actions.redo,
                            actions.setSubscript,
                            actions.setSuperscript,
                            actions.heading1,
                            actions.heading2,
                            actions.heading3,
                        ]}
                        iconMap={{
                            [actions.heading1]: ({ tintColor }) => (
                                <Text style={[{ color: tintColor }]}>H1</Text>
                            ),
                            [actions.heading2]: ({ tintColor }) => (
                                <Text style={[{ color: tintColor }]}>H2</Text>
                            ),
                            [actions.heading3]: ({ tintColor }) => (
                                <Text style={[{ color: tintColor }]}>H3</Text>
                            ),
                        }}
                    />
                    <RichEditor
                        ref={richText}
                        onChange={(descriptionText) => {
                            console.log("descriptionText:", descriptionText);
                        }}
                        useContainer={false}
                        placeholder="Type something..."
                        style={{
                            height: Dimensions.get("window").height - 300,
                            backgroundColor: "white",
                        }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                        }}
                    >
                        <Button text="Submit" onPress={() => {}} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AskQuestion;
