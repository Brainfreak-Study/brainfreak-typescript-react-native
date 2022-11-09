import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";
import MenuList from "../../components/menu/MenuList";
import useColorScheme from "../../hooks/useColorScheme";
import MenuItem from "../../components/menu/MenuItem";
import IconButton from "../../components/views/IconButton";
import SettingsIcon from "../../components/icons/SettingsIcon";
import Container from "../../components/views/Container";
import NotificationIcon from "../../components/icons/NotificationIcon";
import LockIcon from "../../components/icons/LockIcon";
import DocumentTextIcon from "../../components/icons/DocumentTextIcon";
import LogoutIcon from "../../components/icons/LogoutIcon";
import { RootState } from "../../redux/store";
import { removeUser } from "../../redux/slices/user";
import { connect } from "react-redux";

interface IConnectedDispatch {
    removeUserDispatch: typeof removeUser;
}

const SettingsScreen = ({
    navigation,
    removeUserDispatch,
}: RootTabScreenProps<"Settings"> & IConnectedDispatch) => {
    return (
        <Container>
            <MenuList>
                <MenuItem
                    text="Notifications"
                    icon={
                        <IconButton
                            icon={NotificationIcon}
                            color="#475982"
                            iconColor="#fff"
                        />
                    }
                    onPress={() => navigation.navigate("Settings")}
                />
            </MenuList>
            <MenuList>
                <MenuItem
                    text="Password & Security"
                    icon={
                        <IconButton
                            icon={LockIcon}
                            color="#4eb887"
                            iconColor="#fff"
                        />
                    }
                    onPress={() => navigation.navigate("Settings")}
                />
            </MenuList>
            <MenuList>
                <MenuItem
                    text="Terms & Conditions"
                    icon={
                        <IconButton
                            icon={DocumentTextIcon}
                            color="#4a90e4"
                            iconColor="#fff"
                        />
                    }
                    onPress={() => navigation.navigate("Settings")}
                />
            </MenuList>
            <MenuList>
                <MenuItem
                    text="Settings"
                    icon={
                        <IconButton
                            icon={SettingsIcon}
                            color="#8a4fbc"
                            iconColor="#fff"
                        />
                    }
                    onPress={() => navigation.navigate("Settings")}
                />
            </MenuList>
            <MenuList>
                <MenuItem
                    text="Logout"
                    icon={
                        <IconButton
                            icon={LogoutIcon}
                            color="#e5523f"
                            iconColor="#fff"
                        />
                    }
                    textColor="#e5523f"
                    rightIconColor="#e5523f"
                    onPress={removeUserDispatch}
                />
            </MenuList>
        </Container>
    );
};

const mapDispatchToProps = {
    removeUserDispatch: removeUser,
};

export default connect(null, mapDispatchToProps)(SettingsScreen);
