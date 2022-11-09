/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Image } from "react-native";
import {
    InputToolbar,
    Actions,
    Composer,
    Send,
    InputToolbarProps,
    ActionsProps,
    ComposerProps,
    SendProps,
} from "react-native-gifted-chat";
import SendIcon from "../icons/SendIcon";
import { View } from "../Themed";

export const renderInputToolbar = (props: InputToolbarProps<any>) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: "rgba(255,255,255,0.1)",
        }}
        // primaryStyle={{
        //     alignItems: "center",
        //     paddingVertical: 6,
        // }}
    />
);

export const renderActions = (props: ActionsProps) => (
    <Actions
        {...props}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        }}
        icon={() => (
            <Image
                style={{ width: 32, height: 32 }}
                source={{
                    uri: "https://placeimg.com/32/32/any",
                }}
            />
        )}
        options={{
            "Choose From Library": () => {
                console.log("Choose From Library");
            },
            Cancel: () => {
                console.log("Cancel");
            },
        }}
        optionTintColor="#222B45"
    />
);

export const renderComposer = (props: ComposerProps) => (
    <Composer
        {...props}
        textInputStyle={{
            color: "#222B45",
            backgroundColor: "#EDF1F7",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#E4E9F2",
            paddingTop: 8.5,
            paddingHorizontal: 12,
        }}
    />
);

export const renderSend = (props: SendProps<any>) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 4,
        }}
    >
        <View style={{ padding: 5, borderRadius: 10 }}>
            <SendIcon color="white" />
        </View>
    </Send>
);
