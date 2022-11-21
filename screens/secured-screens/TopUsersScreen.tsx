import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import { TabView, SceneMap, TabBar, TabBarProps } from "react-native-tab-view";
import { SafeAreaView } from "../../components/Themed";
import QuestionSearch from "../../components/search/QuestionSearch";
import UserSearch from "../../components/search/UserSearch";
import SearchInput from "../../components/inputs/SearchInput";
import { BluePrimary25 } from "../../constants/colorScheme";
import useColorScheme from "../../hooks/useColorScheme";
import Container from "../../components/views/Container";

const TopUsersScreen = ({ navigation }: RootTabScreenProps<"TopUsers">) => {
    const colorScheme = useColorScheme();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Daily" },
        { key: "second", title: "Monthly" },
        { key: "third", title: "Yearly" },
    ]);

    return (
        <Container style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    first: UserSearch,
                    second: UserSearch,
                    third: UserSearch,
                })}
                onIndexChange={(index) => setIndex(index)}
                initialLayout={{ width: Dimensions.get("window").width }}
                renderTabBar={(props) => renderTabBar(colorScheme, props)}
                sceneContainerStyle={{ overflow: "visible" }}
            />
        </Container>
    );
};

export default TopUsersScreen;

const styles = StyleSheet.create({});

const renderTabBar = (theme: string, props: TabBarProps<any>) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: BluePrimary25 }}
        style={{ backgroundColor: "transparent" }}
        contentContainerStyle={{ flexDirection: "row" }}
    />
);
