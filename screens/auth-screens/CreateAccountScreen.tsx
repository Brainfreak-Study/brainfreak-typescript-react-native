import {
    Image,
    StyleSheet,
    useColorScheme,
    View,
    Keyboard,
    Pressable,
} from "react-native";
import { useFormik } from "formik";
import React from "react";
import { RootTabScreenProps } from "../../types";

import {
    PoppinsBoldText,
    PoppinsRegularText,
} from "../../components/StyledText";
import Button from "../../components/buttons/Button";
import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
} from "../../components/Themed";
import StyledTextInput from "../../components/inputs/StyledInput";
import ProfileIcon from "../../assets/images/icons/profile.svg";
import UsernameIcon from "../../assets/images/icons/security-user.svg";
import { Avatar } from "../../components/avatar/Avatar";

export default function CreateAccountScreen({
    navigation,
}: RootTabScreenProps<"CreateAccount">) {
    const colorScheme = useColorScheme();

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const onAvatarChange = (image: any) => {
        console.log(image);
    };

    return (
        <SafeAreaView
            lightColor="#fff"
            darkColor="#000"
            style={[
                styles.container,
                colorScheme === "dark"
                    ? styles.backgroundBlack
                    : styles.backgroundWhite,
            ]}
        >
            <KeyboardAvoidingView>
                <ScrollView lightColor="#fff" darkColor="#000">
                    <View>
                        <View
                            style={[
                                styles.backgroundWhite,
                                styles.container,
                                colorScheme === "dark"
                                    ? styles.backgroundBlack
                                    : styles.backgroundWhite,
                            ]}
                        >
                            <Pressable onPress={Keyboard.dismiss}>
                                {/* <Image
                                    source={require("../../assets/images/illustrations/no-message.png")}
                                    style={styles.welcomeImage}
                                /> */}

                                <PoppinsBoldText style={styles.title}>
                                    Create an account
                                </PoppinsBoldText>

                                <PoppinsRegularText style={styles.text}>
                                    Please enter your details to continue
                                </PoppinsRegularText>

                                <Avatar
                                    style={{
                                        alignSelf: "center",
                                        marginTop: 20,
                                        borderColor: "#ccc",
                                        borderWidth: 2,
                                    }}
                                    onChange={onAvatarChange}
                                    source={require("../../assets/images/illustrations/login.png")}
                                />

                                <StyledTextInput
                                    placeholder="Name"
                                    icon={
                                        <ProfileIcon
                                            width={20}
                                            height={20}
                                            color="#828895"
                                        />
                                    }
                                    placeholderTextColor={`#828895`}
                                    onChangeText={formik.handleChange("name")}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur("name")}
                                />
                                <StyledTextInput
                                    icon={
                                        <UsernameIcon
                                            width={20}
                                            height={20}
                                            color="#828895"
                                        />
                                    }
                                    placeholder="Username"
                                    placeholderTextColor={`#828895`}
                                    autoCapitalize="none"
                                    onChangeText={formik.handleChange(
                                        "username"
                                    )}
                                    value={formik.values.username}
                                    onBlur={formik.handleBlur("username")}
                                />
                                <StyledTextInput
                                    placeholder="Password"
                                    placeholderTextColor={`#828895`}
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                    onChangeText={formik.handleChange(
                                        "password"
                                    )}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <StyledTextInput
                                    placeholder="Confirm password"
                                    placeholderTextColor={`#828895`}
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                    onChangeText={formik.handleChange(
                                        "confirmPassword"
                                    )}
                                    value={formik.values.confirmPassword}
                                    onBlur={formik.handleBlur(
                                        "confirmPassword"
                                    )}
                                />

                                <Button
                                    text="Create Account"
                                    onPress={() => {}}
                                />
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    backgroundWhite: {
        backgroundColor: "#fff",
    },
    backgroundBlack: {
        backgroundColor: "#000",
    },
    welcomeImage: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },

    title: {
        fontFamily: "poppins-bold",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
    },
    text: {
        fontSize: 16,
    },
    OTPInputView: {
        width: "60%",
        height: 100,
        alignSelf: "center",
    },
    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
        borderColor: "#4d47c3",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#4d47c3",
    },
    resendButton: {
        alignSelf: "center",
        marginTop: 20,
    },
    resendText: {
        color: "#4d47c3",
    },
});
