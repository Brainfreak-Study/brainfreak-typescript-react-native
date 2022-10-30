import {
    Image,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Keyboard,
    Pressable,
    Platform,
} from "react-native";
import React from "react";
import { RootTabScreenProps } from "../../types";

import {
    PoppinsBoldText,
    PoppinsRegularText,
} from "../../components/StyledText";
import Button from "../../components/buttons/Button";
import HeaderWithBack from "../../components/headers/HeaderWithBack";
import OTPInput from "../../components/inputs/OTPInput";
import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
} from "../../components/Themed";

export default function VerifyEmailScreen({
    navigation,
}: RootTabScreenProps<"VerifyEmail">) {
    const colorScheme = useColorScheme();

    const [code, setCode] = React.useState("");

    //create resend timer
    const [resendTimer, setResendTimer] = React.useState(60);
    const [resendTimerActive, setResendTimerActive] = React.useState(false);

    const handleResend = () => {
        setResendTimer(60);
        setResendTimerActive(true);
    };

    React.useEffect(() => {
        if (resendTimerActive) {
            const timer = setTimeout(() => {
                if (resendTimer > 0) {
                    setResendTimer(resendTimer - 1);
                } else {
                    setResendTimerActive(false);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer, resendTimerActive]);

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
                        <HeaderWithBack
                            title="Verify Email"
                            onPress={() => navigation.goBack()}
                        />
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
                                <Image
                                    source={require("../../assets/images/illustrations/no-message.png")}
                                    style={styles.welcomeImage}
                                />

                                <PoppinsBoldText style={styles.title}>
                                    Verify Your Email
                                </PoppinsBoldText>

                                <PoppinsRegularText style={styles.text}>
                                    We have sent you an email with a
                                    verification code. Please enter the code
                                    below to verify your email.
                                </PoppinsRegularText>

                                <OTPInput />

                                <TouchableOpacity
                                    style={styles.resendButton}
                                    onPress={handleResend}
                                >
                                    <PoppinsRegularText
                                        style={styles.resendText}
                                    >
                                        {resendTimerActive
                                            ? `Resend OTP in ${resendTimer} seconds`
                                            : "Resend OTP"}
                                    </PoppinsRegularText>
                                </TouchableOpacity>

                                <Button
                                    text="Verify"
                                    onPress={() => {
                                        navigation.navigate("CreateAccount");
                                    }}
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
        textAlign: "center",
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
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
