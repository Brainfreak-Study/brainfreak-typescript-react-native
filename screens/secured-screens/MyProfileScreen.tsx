import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import {
    PoppinsBoldText,
    PoppinsItalicText,
    PoppinsMediumText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../../components/StyledText";
import { useAppDispatch } from "../../redux/hooks";
import { BlueSecondary100, RedLight } from "../../constants/colorScheme";
import { SafeAreaScrollView } from "../../components/Themed";
import EditProfileIcon from "../../components/icons/EditProfileIcon";
import MenuList from "../../components/menu/MenuList";
import MenuItem from "../../components/menu/MenuItem";
import NotificationIcon from "../../components/icons/NotificationIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import QuestionIcon from "../../components/icons/QuestionIcon";
import AnswerIcon from "../../components/icons/AnswerIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import StatsItem from "../../components/stats/StatsItem";
import PointsIcon from "../../components/icons/PointsIcon";
import FollowingIcon from "../../components/icons/FollowingsIcon";
import FollowersIcon from "../../components/icons/FollowersIcon";
import Flex from "../../components/views/Flex";
import useColorScheme from "../../hooks/useColorScheme";
import MessageIcon from "../../components/icons/MessageIcon";
import IconButton from "../../components/views/IconButton";

const MyProfileScreen = ({ navigation }: RootTabScreenProps<"MyProfile">) => {
    const dispatch = useAppDispatch();
    const colorScheme = useColorScheme();

    // const percentage = -9999;

    // if (percentage > 1000) {
    //     console.log(">1000%");
    // } else if (percentage < -1000) {
    //     console.log("<1000%");
    // } else {
    //     console.log(percentage);
    // }

    return (
        <SafeAreaScrollView>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/images/users/user.jpg")}
                    style={styles.avatar}
                />
                <View style={styles.infoContainer}>
                    <PoppinsMediumText style={styles.name}>
                        Eklavya Singh
                    </PoppinsMediumText>
                    <PoppinsSemiBoldText style={styles.username}>
                        @eklavya
                    </PoppinsSemiBoldText>
                    <View style={styles.date}>
                        <CalendarIcon
                            color={colorScheme === "dark" ? "white" : "black"}
                            width={15}
                            height={15}
                        />
                        <PoppinsItalicText
                            style={[
                                styles.dateText,
                                colorScheme === "dark"
                                    ? styles.dateTextDark
                                    : styles.dateTextLight,
                            ]}
                        >
                            Joined 1st Jan 2021
                        </PoppinsItalicText>
                    </View>
                </View>
            </View>

            <PoppinsRegularText style={styles.bio}>
                Lorem ipsum dolor sit amet, conse ctetur adip iscing elit. Sed
                euis mod, nunc sit amet aliq uam lacinia, nisl nisl aliq uet
                nunc, eget ali quam nisl nisl sit amet lorem.
            </PoppinsRegularText>

            <Flex
                align="center"
                direction="row"
                justify="space-between"
                padding={20}
            >
                <StatsItem
                    icon={
                        <FollowersIcon
                            height={30}
                            width={30}
                            color={colorScheme === "dark" ? "white" : "black"}
                        />
                    }
                    number={946}
                    label="Followers"
                />
                <StatsItem
                    icon={
                        <FollowingIcon
                            height={30}
                            width={30}
                            color={colorScheme === "dark" ? "white" : "black"}
                        />
                    }
                    number={19}
                    label="Following"
                />
                <StatsItem
                    icon={
                        <PointsIcon
                            height={30}
                            width={30}
                            color={colorScheme === "dark" ? "white" : "black"}
                        />
                    }
                    number={3090}
                    label="Points"
                />
            </Flex>

            <MenuList>
                <MenuItem
                    text="My Questions"
                    icon={
                        <IconButton
                            icon={QuestionIcon}
                            color="#F806CC"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    text="My Answers"
                    icon={
                        <IconButton
                            icon={AnswerIcon}
                            color="#DC5F00"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    onPress={() => navigation.navigate("Messages")}
                    text="My Messages"
                    icon={
                        <IconButton
                            icon={MessageIcon}
                            color="#B9005B"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    text="My Stats"
                    icon={
                        <IconButton
                            icon={EditProfileIcon}
                            color="#24A19C"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    text="My Notifications"
                    icon={
                        <IconButton
                            icon={NotificationIcon}
                            color="#E04D01"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    text="Settings"
                    icon={
                        <IconButton
                            icon={SettingsIcon}
                            color="#2666CF"
                            iconColor="#fff"
                        />
                    }
                    onPress={() => navigation.navigate("Settings")}
                />
            </MenuList>
        </SafeAreaScrollView>
    );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "red",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        padding: 20,
    },
    infoContainer: {
        padding: 20,
    },
    name: {
        fontSize: 28,
        lineHeight: 30,
    },
    username: {
        fontSize: 16,
        color: BlueSecondary100,
    },
    bio: {
        fontSize: 14,
        paddingHorizontal: 20,
    },
    date: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    dateText: {
        color: "white",
        marginLeft: 5,
        fontSize: 12,
        marginTop: 2,
    },
    dateTextDark: {
        color: "white",
    },
    dateTextLight: {
        color: "black",
    },
});
