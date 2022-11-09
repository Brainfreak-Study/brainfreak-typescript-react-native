import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import Chats from "../../components/messages";
import { SafeAreaView } from "../../components/Themed";
import Flex from "../../components/views/Flex";
import {
    PoppinsMediumText,
    PoppinsSemiBoldText,
} from "../../components/StyledText";
import useColorScheme from "../../hooks/useColorScheme";
import LongArrowLeft from "../../components/icons/LongArrowLeft";
import CandleMenuIcon from "../../components/icons/CandleMenuIcon";
import ModelCenter from "../../components/modals/ModelCenter";
import ProfileIcon from "../../components/icons/ProfileIcon";

const MessagesScreen = ({ navigation }: RootTabScreenProps<"Messages">) => {
    const colorScheme = useColorScheme();

    const [showModal, setShowModal] = React.useState(false);

    return (
        <SafeAreaView
            style={[
                styles.container,
                colorScheme === "dark"
                    ? styles.containerDark
                    : styles.containerLight,
            ]}
        >
            <ModelCenter
                visible={showModal}
                onClose={() => setShowModal(false)}
                items={[
                    {
                        text: "View Profile",
                        onPress: () => console.log("New Group"),
                        icon: <ProfileIcon />,
                    },
                    {
                        text: "New Secret Chat",
                        onPress: () => console.log("New Secret Chat"),
                        icon: <CandleMenuIcon />,
                    },
                    {
                        text: "New Channel",
                        onPress: () => console.log("New Channel"),
                        icon: <CandleMenuIcon />,
                    },
                ]}
            />

            <Flex style={styles.header} direction="row">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LongArrowLeft
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </TouchableOpacity>
                <Flex direction="row" style={styles.userInfo}>
                    <Image
                        source={require("../../assets/images/users/user.jpg")}
                        style={styles.avatar}
                    />
                    <View>
                        <PoppinsSemiBoldText>Eklavya Singh</PoppinsSemiBoldText>
                        <PoppinsMediumText>
                            Active 14 minutes ago
                        </PoppinsMediumText>
                    </View>
                </Flex>
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    style={{ marginLeft: "auto" }}
                >
                    <CandleMenuIcon
                        color={colorScheme === "dark" ? "white" : "black"}
                    />
                </TouchableOpacity>
            </Flex>
            <Chats />
        </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDark: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    containerLight: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },

    header: {
        height: 60,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.2)",
        padding: 10,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 15,
        marginRight: 10,
    },
    userInfo: {
        marginLeft: 10,
    },
});
