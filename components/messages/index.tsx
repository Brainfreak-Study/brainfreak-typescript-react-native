import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import useColorScheme from "../../hooks/useColorScheme";
import { View } from "../Themed";
import initialMessages from "./dummyData/messages";
import {
    renderInputToolbar,
    renderActions,
    renderComposer,
    renderSend,
} from "./InputToolbar";
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
    renderScrollToBottomComponent,
} from "./MessageComponents";

const Chats = () => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState<any>([]);

    const colorScheme = useColorScheme();

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages: any) => {
        setMessages((prevMessages: any) =>
            GiftedChat.append(prevMessages, newMessages || [])
        );
    };

    return (
        <GiftedChat
            messages={messages}
            text={text}
            onInputTextChanged={setText}
            onSend={onSend}
            user={{
                _id: 1,
                name: "Aaron",
                avatar: "https://placeimg.com/150/150/any",
            }}
            alignTop
            alwaysShowSend
            scrollToBottom
            wrapInSafeArea={false}
            // showUserAvatar
            renderAvatarOnTop
            renderUsernameOnMessage
            bottomOffset={26}
            onPressAvatar={console.log}
            renderInputToolbar={(props) => renderInputToolbar(props)}
            // renderActions={renderActions}
            renderComposer={renderComposer}
            renderSend={renderSend}
            renderAvatar={renderAvatar}
            renderBubble={(props) => renderBubble(colorScheme, props)}
            // renderSystemMessage={renderSystemMessage}
            // renderMessage={(props) => renderMessage(colorScheme, props)}
            renderMessageText={(props) => renderMessageText(colorScheme, props)}
            // renderMessageImage
            // renderCustomView={renderCustomView}
            isCustomViewBottom
            scrollToBottomComponent={() =>
                renderScrollToBottomComponent(colorScheme)
            }
            messagesContainerStyle={{
                backgroundColor: colorScheme === "dark" ? "#242424" : "#fff",
            }}
            parsePatterns={(linkStyle) => [
                {
                    pattern: /#(\w+)/,
                    style: linkStyle,
                    onPress: (tag: string) =>
                        console.log(`Pressed on hashtag: ${tag}`),
                },
            ]}
        />
    );
};

export default Chats;
