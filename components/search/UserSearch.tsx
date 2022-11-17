import { StyleSheet, View } from "react-native";
import React from "react";
import SearchUsers from "../users/SearchUsers";
import { ScrollView } from "../Themed";
import SearchUsersData from "../../dummy-data/DummyUsers";

const UserSearch = () => {
    return (
        <ScrollView lightColor="#fff" darkColor="#000" style={styles.container}>
            {SearchUsersData.slice(10, 20).map((user) => (
                <SearchUsers
                    key={user._id}
                    avatar={user.avatar}
                    name={user.name}
                    username={user.username}
                />
            ))}
            <View style={styles.footer}></View>
        </ScrollView>
    );
};

export default UserSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
    },
    footer: {
        height: 30,
    },
});
