import { useState } from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

//Icons Import
import LockIcon from "../../assets/images/icons/lock.svg";
import EyeIcon from "../../assets/images/icons/eye.svg";
import EyeSlashIcon from "../../assets/images/icons/eye-slash.svg";
import { PoppinsRegularText } from "../StyledText";

interface InputProps extends TextInputProps {
    icon?: React.ReactNode;
    error?: any;
}

function StyledTextInput({
    icon,
    error,
    secureTextEntry,
    ...props
}: InputProps) {
    const colorScheme = useColorScheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.textInputContainer,
                    colorScheme === "dark"
                        ? styles.textInputContainerDark
                        : styles.textInputContainerLight,
                ]}
            >
                {secureTextEntry ? (
                    <LockIcon width={20} height={20} color="#828895" />
                ) : (
                    icon
                )}

                <TextInput
                    style={[
                        styles.input,
                        colorScheme === "dark"
                            ? styles.inputDark
                            : styles.inputLight,
                    ]}
                    placeholderTextColor={`#828895`}
                    secureTextEntry={secureTextEntry && !showPassword}
                    {...props}
                />

                {secureTextEntry && (
                    <TouchableOpacity
                        style={{ paddingLeft: 10 }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeSlashIcon
                                width={20}
                                height={20}
                                color="#828895"
                            />
                        ) : (
                            <EyeIcon width={20} height={20} color="#828895" />
                        )}
                    </TouchableOpacity>
                )}
            </View>

            {error && (
                <PoppinsRegularText style={styles.errorText}>
                    {error}
                </PoppinsRegularText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    textInputContainer: {
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        marginVertical: 2,
    },
    textInputContainerDark: {
        borderColor: "#242424",
    },
    textInputContainerLight: {
        borderColor: "#ccc",
    },
    input: {
        height: 50,
        padding: 10,
        borderRadius: 5,
        fontFamily: "poppins-regular",
        flex: 1,
    },
    inputDark: {
        color: "#ccc",
    },
    inputLight: {
        color: "#242424",
    },
    errorText: {
        fontSize: 12,
        color: "#ff0000",
        fontFamily: "poppins-regular",
    },
});

export default StyledTextInput;
