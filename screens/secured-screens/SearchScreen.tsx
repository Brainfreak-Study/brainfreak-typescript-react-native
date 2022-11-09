import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";

const SearchScreen = ({ navigation }: RootTabScreenProps<"Search">) => {
    return (
        <View>
            <Text>SearchScreen</Text>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({});
