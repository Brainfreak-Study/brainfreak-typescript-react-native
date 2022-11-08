import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { useFormik } from "formik";
import { PoppinsRegularText } from "../../components/StyledText";
import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

//Icons Import
import StyledTextInput from "../../components/inputs/StyledInput";
import SocialIconsGrid from "../../components/socials/SocialIconsGrid";
import Button from "../../components/buttons/Button";
import { connect } from "react-redux";
import { setUser, removeUser } from "../../redux/slices/user";
import { EmailValidation } from "../../validations/registerValidation";
import Seprator from "../../components/Seprator";
import ProfileIcon from "../../components/icons/ProfileIcon";

interface IConnectedDispatch {
    setUserDispatch: typeof setUser;

    removeUserDispatch: typeof removeUser;
}

function RegisterScreen({
    navigation,
    setUserDispatch,
    removeUserDispatch,
}: RootTabScreenProps<"Register"> & IConnectedDispatch) {
    const colorScheme = useColorScheme();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            removeUserDispatch();
            setUserDispatch({
                email: values.email,
            });
            navigation.navigate("VerifyEmail");
        },
        validationSchema: EmailValidation,
    });
    return (
        <SafeAreaView lightColor="#fff" darkColor="#000">
            <KeyboardAvoidingView>
                <ScrollView lightColor="#fff" darkColor="#000">
                    <View
                        style={[
                            styles.container,
                            colorScheme === "dark"
                                ? styles.containerDark
                                : styles.containerLight,
                        ]}
                    >
                        <Image
                            source={require("../../assets/images/illustrations/signup.png")}
                            style={styles.welcomeImage}
                        />
                        <Text
                            style={styles.title}
                            lightColor="#000"
                            darkColor="#fff"
                        >
                            Join the community!
                        </Text>
                        <View style={styles.socialMediaLogin}>
                            <SocialIconsGrid />
                        </View>

                        <View style={styles.footer}>
                            <PoppinsRegularText style={styles.footerText}>
                                By continuing, you agree to our
                            </PoppinsRegularText>
                            <TouchableOpacity>
                                <PoppinsRegularText style={styles.footerLink}>
                                    Terms of Service
                                </PoppinsRegularText>
                            </TouchableOpacity>
                            <PoppinsRegularText style={styles.footerText}>
                                and
                            </PoppinsRegularText>
                            <TouchableOpacity>
                                <PoppinsRegularText style={styles.footerLink}>
                                    Privacy Policy
                                </PoppinsRegularText>
                            </TouchableOpacity>
                        </View>

                        <Seprator
                            text="Or sign up with email"
                            style={{ marginTop: 20 }}
                        />

                        <StyledTextInput
                            icon={
                                <ProfileIcon
                                    width={20}
                                    height={20}
                                    color="#828895"
                                />
                            }
                            placeholder="Email ID"
                            placeholderTextColor={`#828895`}
                            autoCapitalize="none"
                            onChangeText={formik.handleChange("email")}
                            value={formik.values.email}
                            onBlur={formik.handleBlur("email")}
                            error={formik.touched.email && formik.errors.email}
                        />

                        <Button
                            text="Register"
                            onPress={() => formik.handleSubmit()}
                        />

                        <View style={styles.footer}>
                            <PoppinsRegularText style={styles.footerText}>
                                Already have an account?
                            </PoppinsRegularText>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <PoppinsRegularText style={styles.footerLink}>
                                    Login
                                </PoppinsRegularText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    containerDark: {
        backgroundColor: "#000",
    },
    containerLight: {
        backgroundColor: "#fff",
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
    button: {
        backgroundColor: "#4d47c3",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        marginVertical: 12,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 15,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        flexWrap: "wrap",
    },
    footerText: {
        color: "#828895",
    },
    footerLink: {
        color: "#4d47c3",
        marginLeft: 5,
    },
    socialMediaLogin: {
        marginTop: 20,
        alignItems: "center",
    },
    socialMediaLoginText: {
        color: "#828895",
        paddingHorizontal: 10,
    },
    socialMediaLoginIcons: {
        flexDirection: "row",
        marginTop: 10,
    },
    socialMediaLoginIcon: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    socialMediaIcon: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 25,
        marginHorizontal: 5,
    },
    socialMediaIconDark: {
        borderColor: "#242424",
    },
    socialMediaIconLight: {
        borderColor: "#ccc",
    },
});

const mapDispatchToProps = {
    removeUserDispatch: removeUser,
    setUserDispatch: setUser,
};

export default connect(null, mapDispatchToProps)(RegisterScreen);
