import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import {
    PoppinsItalicText,
    PoppinsMediumText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../../components/StyledText";
import { useAppDispatch } from "../../redux/hooks";
import { BlueSecondary100 } from "../../constants/colorScheme";
import { SafeAreaScrollView } from "../../components/Themed";
import EditProfileIcon from "../../components/icons/EditProfileIcon";
import MenuList from "../../components/menu/MenuList";
import MenuItem from "../../components/menu/MenuItem";
import QuestionIcon from "../../components/icons/QuestionIcon";
import AnswerIcon from "../../components/icons/AnswerIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import StatsItem from "../../components/stats/StatsItem";
import PointsIcon from "../../components/icons/PointsIcon";
import FollowingIcon from "../../components/icons/FollowingsIcon";
import FollowersIcon from "../../components/icons/FollowersIcon";
import Flex from "../../components/views/Flex";
import useColorScheme from "../../hooks/useColorScheme";
import IconButton from "../../components/views/IconButton";
import { dateFormatter } from "../../functions/DateFormatter";

const ProfileScreen = ({
    navigation,
    route,
}: RootTabScreenProps<"Profile">) => {
    const dispatch = useAppDispatch();
    const colorScheme = useColorScheme();

    return (
        <SafeAreaScrollView>
            <View style={styles.header}>
                <Image
                    source={{ uri: route.params.avatar }}
                    style={styles.avatar}
                />
                <View style={styles.infoContainer}>
                    <PoppinsMediumText style={styles.name}>
                        {route.params.name}
                    </PoppinsMediumText>
                    <PoppinsSemiBoldText style={styles.username}>
                        @{route.params.username}
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
                            Joined {dateFormatter(route.params.createdAt)}
                        </PoppinsItalicText>
                    </View>
                </View>
            </View>

            <PoppinsRegularText style={styles.bio}>
                {route.params.description}
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
                    number={route.params.followers}
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
                    number={route.params.followings}
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
                    number={route.params.points}
                    label="Points"
                />
            </Flex>

            <MenuList>
                <MenuItem
                    text="All Questions"
                    icon={
                        <IconButton
                            icon={QuestionIcon}
                            color="#F806CC"
                            iconColor="#fff"
                        />
                    }
                />
                <MenuItem
                    text="All Answers"
                    icon={
                        <IconButton
                            icon={AnswerIcon}
                            color="#DC5F00"
                            iconColor="#fff"
                        />
                    }
                />

                <MenuItem
                    text="User Stats"
                    icon={
                        <IconButton
                            icon={EditProfileIcon}
                            color="#24A19C"
                            iconColor="#fff"
                        />
                    }
                />
            </MenuList>
        </SafeAreaScrollView>
    );
};

export default ProfileScreen;

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
