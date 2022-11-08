import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    PoppinsBoldText,
    PoppinsMediumText,
    PoppinsRegularText,
    PoppinsSemiBoldText,
} from "../StyledText";
import {
    BlueSecondary100,
    GrayExtraDark,
    GrayLight,
    GrayLighter,
} from "../../constants/colorScheme";
import useColorScheme from "../../hooks/useColorScheme";

interface IStatsItem {
    icon: React.ReactNode;
    number: number;
    label: string;
}

const StatsItem = ({
    icon,
    number,
    label,
}: IStatsItem): React.ReactElement<IStatsItem> => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.statsItem}>
            <View
                style={[
                    styles.statsIcon,
                    colorScheme === "dark"
                        ? styles.StatsIconDark
                        : styles.StatsIconLight,
                ]}
            >
                {icon}
            </View>
            <PoppinsMediumText style={styles.statsItemLabel}>
                {label}
            </PoppinsMediumText>
            <PoppinsSemiBoldText style={styles.statsItemNumber}>
                {number}
            </PoppinsSemiBoldText>
        </View>
    );
};

export default StatsItem;

const styles = StyleSheet.create({
    statsItem: {
        alignItems: "center",
        maxWidth: 100,
        minWidth: 100,
    },
    statsItemNumber: {
        fontSize: 16,
    },
    statsItemLabel: {
        fontSize: 14,
        color: BlueSecondary100,
    },
    statsIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    StatsIconDark: {
        color: "white",
        backgroundColor: GrayExtraDark,
    },
    StatsIconLight: {
        color: "black",
        backgroundColor: GrayLighter,
    },
});
