import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    Avatar,
    Bubble,
    SystemMessage,
    Message,
    MessageText,
    AvatarProps,
    BubbleProps,
    SystemMessageProps,
    MessageProps,
    MessageTextProps,
} from "react-native-gifted-chat";
import ArrowDownIcon from "../icons/ArrowDownIcon";

export const renderAvatar = (props: AvatarProps<any>) => (
    <Avatar
        {...props}
        // containerStyle={{
        //     left: { borderWidth: 3, borderColor: "red" },
        //     right: {},
        // }}
        // imageStyle={{
        //     left: { borderWidth: 3, borderColor: "blue" },
        //     right: {},
        // }}
    />
);

export const renderBubble = (theme: string, props: BubbleProps<any>) => (
    <Bubble
        {...props}
        // renderTime={() => <Text>Time</Text>}
        // renderTicks={() => <Text>Ticks</Text>}
        containerStyle={{
            // left: { backgroundColor: "#EDF1F7" },
            right: {},
        }}
        wrapperStyle={{
            left: { backgroundColor: theme === "dark" ? "#35383f" : "#f5f5f5" },
            right: { backgroundColor: "#246bfd" },
        }}
        // bottomContainerStyle={{
        //     left: { borderColor: "purple", borderWidth: 4 },
        //     right: {},
        // }}
        // tickStyle={{}}
        // usernameStyle={{ color: "tomato", fontWeight: "100" }}
        // containerToNextStyle={{
        //     left: { borderColor: "navy", borderWidth: 4 },
        //     right: {},
        // }}
        // containerToPreviousStyle={{
        //     left: { borderColor: "mediumorchid", borderWidth: 4 },
        //     right: {},
        // }}
    />
);

export const renderSystemMessage = (props: SystemMessageProps<any>) => (
    <SystemMessage
        {...props}
        containerStyle={{ backgroundColor: "pink" }}
        wrapperStyle={{ borderWidth: 10, borderColor: "white" }}
        textStyle={{ color: "crimson", fontWeight: "900" }}
    />
);

export const renderMessage = (theme: string, props: MessageProps<any>) => (
    <Message
        {...props}
        // renderDay={() => <Text>Date</Text>}
        // containerStyle={{
        //     left: { backgroundColor: theme === "light" ? "white" : "#222B45" },
        //     right: { backgroundColor: theme === "light" ? "white" : "#222B45" },
        // }}
    />
);

export const renderMessageText = (
    theme: string,
    props: MessageTextProps<any>
) => (
    <MessageText
        {...props}
        textStyle={{
            left: { color: theme === "dark" ? "white" : "black" },
            right: { color: "white" },
        }}
        linkStyle={{
            left: { color: "#2262e4" },
            right: { color: "#242424" },
        }}
        // customTextStyle={{ fontSize: 24, lineHeight: 24 }}
    />
);

export const renderCustomView = ({ user }: any) => (
    <View style={{ minHeight: 20, alignItems: "center" }}>
        <Text>
            Current user:
            {user.name}
        </Text>
        <Text>From CustomView</Text>
    </View>
);

export const renderScrollToBottomComponent = (mode: string) => (
    <View
        style={[
            styles.scrollToBottomContainer,
            mode == "dark"
                ? styles.scrollToBottomContainerDark
                : styles.scrollToBottomContainerLight,
        ]}
    >
        <ArrowDownIcon color={mode == "dark" ? "white" : "black"} />
    </View>
);

const styles = StyleSheet.create({
    scrollToBottomContainer: {
        padding: 10,
        borderRadius: 20,
    },
    scrollToBottomContainerDark: {
        backgroundColor: "#000",
    },
    scrollToBottomContainerLight: {
        backgroundColor: "#fff",
    },
});
