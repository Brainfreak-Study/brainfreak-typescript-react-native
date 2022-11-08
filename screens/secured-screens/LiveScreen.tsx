import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import {
    PoppinsBoldText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../../components/StyledText";
import { SafeAreaScrollView, ScrollView } from "../../components/Themed";
import Flex from "../../components/views/Flex";
import TopUserGrid from "../../components/top-users/TopUserGrid";
import ArrowRightIcon from "../../components/icons/ArrowRightIcon";
import useColorScheme from "../../hooks/useColorScheme";
import LiveQuestion from "../../components/questions/LiveQuestion";

const LiveScreen = ({ navigation }: RootTabScreenProps<"Live">) => {
    const colorScheme = useColorScheme();
    return (
        <SafeAreaScrollView style={styles.container}>
            <View style={styles.header}>
                <PoppinsBoldText style={styles.title}>Live</PoppinsBoldText>
                <PoppinsRegularText style={styles.description}>
                    Hi Eklavya, Good Morning!
                </PoppinsRegularText>
            </View>
            <Flex
                style={[
                    styles.topUsers,
                    colorScheme === "dark"
                        ? styles.topUserDark
                        : styles.topUserLight,
                ]}
            >
                <PoppinsSemiBoldText style={styles.topUserText}>
                    Top Users of the Day
                </PoppinsSemiBoldText>
                <ScrollView
                    horizontal={true}
                    style={
                        colorScheme === "dark"
                            ? styles.topUserDark
                            : styles.topUserLight
                    }
                >
                    {Array.from(Array(10).keys()).map((i) => (
                        <TopUserGrid key={i} />
                    ))}
                </ScrollView>

                <TouchableOpacity style={styles.seeAllButton}>
                    <Flex direction="row" align="center" justify="center">
                        <PoppinsRegularText style={styles.seeAll}>
                            See All
                        </PoppinsRegularText>
                        <ArrowRightIcon
                            width={20}
                            height={20}
                            color="#007AFF"
                        />
                    </Flex>
                </TouchableOpacity>
            </Flex>
            <Flex padding={20} style={styles.liveQuestions}>
                <PoppinsSemiBoldText style={styles.topUserText}>
                    Live Questions
                </PoppinsSemiBoldText>

                <View>
                    {Array.from(Array(10).keys()).map((i) => (
                        <TouchableOpacity key={i}>
                            <LiveQuestion />
                        </TouchableOpacity>
                    ))}
                </View>
            </Flex>
        </SafeAreaScrollView>
    );
};

export default LiveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
    },
    description: {
        fontSize: 20,
    },
    topUserText: {
        fontSize: 20,
        marginBottom: 10,
    },
    topUsers: {
        marginTop: 20,
        padding: 20,
        paddingRight: 0,
        marginLeft: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    topUserDark: {
        backgroundColor: "#1E1E1E",
    },
    topUserLight: {
        backgroundColor: "#F2F2F2",
    },
    seeAll: {
        color: "#007AFF",
        fontSize: 15,
    },
    seeAllButton: {
        marginTop: 10,
    },
    liveQuestions: {
        marginTop: 20,
    },
});
