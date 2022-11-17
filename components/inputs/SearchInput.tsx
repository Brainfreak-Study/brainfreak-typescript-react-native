import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { PoppinsRegularInput } from "../StyledInputs";
import { View } from "../Themed";
import {
    darkPrimary,
    darkSecondary,
    darkTertiary,
    lightPrimary,
    lightSecondary,
} from "../../constants/colorScheme";
import CloseIcon from "../icons/CloseIcon";
import useColorScheme from "../../hooks/useColorScheme";
import SearchIcon from "../icons/SearchIcon";

interface InputProps extends React.ComponentProps<typeof PoppinsRegularInput> {
    placeholder: string;
    onClear: () => void;
}

const SearchInput = ({ placeholder, onClear, style, ...props }: InputProps) => {
    const colorScheme = useColorScheme();
    return (
        <View
            darkColor={darkPrimary}
            lightColor={lightPrimary}
            style={styles.container}
        >
            <PoppinsRegularInput
                placeholder={placeholder}
                style={[style, styles.input]}
                {...props}
                placeholderTextColor={darkTertiary}
            />

            {props.value ? (
                <TouchableOpacity onPress={onClear} style={styles.icon}>
                    <CloseIcon
                        color={
                            colorScheme === "dark" ? lightPrimary : darkPrimary
                        }
                    />
                </TouchableOpacity>
            ) : (
                <SearchIcon
                    style={styles.icon}
                    color={colorScheme === "dark" ? lightPrimary : darkPrimary}
                />
            )}
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        borderRadius: 10,
    },

    input: {
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginRight: 30,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 10,
    },
});
