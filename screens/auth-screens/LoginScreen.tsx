import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useColorScheme } from "react-native";
import { PoppinsRegularText } from "../../components/StyledText";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

//Icons Import
import LockIcon from "../../assets/images/icons/lock.svg";
import ProfileIcon from "../../assets/images/icons/profile.svg";
import StyledTextInput from "../../components/inputs/StyledInput";
import SocialIconsGrid from "../../components/socials/SocialIconsGrid";

export default function RegisterScreen({
    navigation,
}: RootTabScreenProps<"Login">) {
    const colorScheme = useColorScheme();
    return (
        <ScrollView
            style={{
                backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
            }}
        >
            <View
                style={
                    colorScheme === "dark"
                        ? styles.containerDark
                        : styles.container
                }
            >
                <Image
                    source={require("../../assets/images/illustrations/login.png")}
                    style={styles.welcomeImage}
                />
                <Text style={styles.title} lightColor="#000" darkColor="#fff">
                    Welcome back!
                </Text>

                <StyledTextInput
                    icon={
                        <ProfileIcon width={20} height={20} color="#828895" />
                    }
                    placeholder="Email or username"
                    placeholderTextColor={`#828895`}
                />

                <StyledTextInput
                    placeholder="Password"
                    placeholderTextColor={`#828895`}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <PoppinsRegularText style={styles.buttonText}>
                        Login
                    </PoppinsRegularText>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <PoppinsRegularText style={styles.footerText}>
                        Don't have an account?
                    </PoppinsRegularText>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <PoppinsRegularText style={styles.footerLink}>
                            Register
                        </PoppinsRegularText>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialMediaLogin}>
                    <View style={styles.sepratorContainer}>
                        <View
                            style={[
                                styles.seprator,
                                colorScheme === "dark"
                                    ? styles.sepratorDark
                                    : styles.sepratorLight,
                            ]}
                        />
                        <PoppinsRegularText style={styles.socialMediaLoginText}>
                            Or login with
                        </PoppinsRegularText>
                        <View
                            style={[
                                styles.seprator,
                                colorScheme === "dark"
                                    ? styles.sepratorDark
                                    : styles.sepratorLight,
                            ]}
                        />
                    </View>
                    <SocialIconsGrid style={{ marginTop: 10 }} />
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
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
    },
    containerDark: {
        backgroundColor: "#000",
        padding: 20,
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

    sepratorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    seprator: {
        flex: 1,
        height: 1,
    },
    sepratorDark: {
        backgroundColor: "#242424",
    },
    sepratorLight: {
        backgroundColor: "#ccc",
    },
});
