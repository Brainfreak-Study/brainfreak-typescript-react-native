import {
    Image,
    StyleSheet,
    useColorScheme,
    View,
    TouchableOpacity,
    Keyboard,
    Pressable,
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
import { IUserState } from "../../redux/slices/user";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import ResendTimer from "../../components/texts/ResendTimer";

interface IConnectedState {
    user: IUserState;
}

function VerifyEmailScreen({
    navigation,
    user,
}: RootTabScreenProps<"VerifyEmail"> & IConnectedState) {
    const colorScheme = useColorScheme();
    const [code, setCode] = React.useState("");

    console.log({ user });

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
                                    verification code to{" "}
                                    <PoppinsBoldText style={styles.text}>
                                        {user.email}
                                    </PoppinsBoldText>
                                </PoppinsRegularText>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                >
                                    <PoppinsBoldText
                                        style={styles.textChangeEmail}
                                    >
                                        Edit Email
                                    </PoppinsBoldText>
                                </TouchableOpacity>
                                <OTPInput />
                                <ResendTimer
                                    onPress={() =>
                                        console.log("Resend Clicked")
                                    }
                                />
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
    textChangeEmail: {
        fontSize: 14,
        textAlign: "center",
        color: "#3F51B5",
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
});

const mapStateToProps = (state: RootState): IConnectedState => ({
    user: state.user,
});

export default connect(mapStateToProps)(VerifyEmailScreen);
