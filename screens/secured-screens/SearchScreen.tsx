import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import { TabView, SceneMap, TabBar, TabBarProps } from "react-native-tab-view";
import { SafeAreaView } from "../../components/Themed";
import QuestionSearch from "../../components/search/QuestionSearch";
import UserSearch from "../../components/search/UserSearch";
import SearchInput from "../../components/inputs/SearchInput";
import { PoppinsRegularInput } from "../../components/StyledInputs";
import QuestionIcon from "../../components/icons/QuestionIcon";
import ProfileIcon from "../../components/icons/ProfileIcon";
import {
    BluePrimary100,
    BluePrimary25,
    BluePrimary50,
    Purple,
    PurpleLight,
} from "../../constants/colorScheme";
import useColorScheme from "../../hooks/useColorScheme";

const SearchScreen = ({ navigation }: RootTabScreenProps<"Search">) => {
    const colorScheme = useColorScheme();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Questions" },
        { key: "second", title: "Users" },
    ]);

    const [search, setSearch] = React.useState<string>("");

    return (
        <SafeAreaView>
            <View style={styles.searchBar}>
                <SearchInput
                    placeholder={`Search ${routes[index].title}`}
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    onClear={() => setSearch("")}
                />
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    first: QuestionSearch,
                    second: UserSearch,
                })}
                onIndexChange={(index) => setIndex(index)}
                initialLayout={{ width: Dimensions.get("window").width }}
                renderTabBar={(props) => renderTabBar(colorScheme, props)}
                sceneContainerStyle={{ overflow: "visible" }}
            />
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
    },
});

const renderTabBar = (theme: string, props: TabBarProps<any>) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: BluePrimary25 }}
        style={{ backgroundColor: "transparent" }}
        contentContainerStyle={{ flexDirection: "row" }}
    />
);
