import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import Chats from "../../components/messages";
import { SafeAreaView } from "../../components/Themed";

const MessagesScreen = ({ navigation }: RootTabScreenProps<"Messages">) => {
    return (
        <SafeAreaView>
            <Chats />
        </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
