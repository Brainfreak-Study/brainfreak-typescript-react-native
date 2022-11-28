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
import { setUser, IUserState, removeUser } from "../../redux/slices/user";
import { RootState } from "../../redux/store";
import ProfileIcon from "../../components/icons/ProfileIcon";
import {
  BluePrimary25,
  BlueSecondary100,
  BlueSecondary25,
  BlueSecondary50,
} from "../../constants/colorScheme";

import Toast from "react-native-toast-message";
import { useLogin } from "@network/mutations/authMutations";
import { useCallback } from "react";

interface IConnectedDispatch {
  setUserDispatch: typeof setUser;
  removeUserDispatch: typeof removeUser;
}
interface IConnectedState {
  user: IUserState;
}

function LoginScreen({
  navigation,
  setUserDispatch,
  removeUserDispatch,
  user,
}: RootTabScreenProps<"Login"> & IConnectedDispatch & IConnectedState) {
  const colorScheme = useColorScheme();

  const { mutate } = useLogin();

  const handleLogin = useCallback((values: any) => {
    mutate(
      {
        username: values.email,
        password: values.password,
      },
      {
        onSuccess: (data) => {
          setUserDispatch({
            _id: data.user._id,
            username: data.user.username,
            email: data.user.email,
            role: data.user.role,
            isAuth: true,
          });
        },
      }
    );
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email !== "" || values.password !== "") {
        handleLogin(values);
      }
    },
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
              source={require("../../assets/images/illustrations/login.png")}
              style={styles.welcomeImage}
            />
            <Text style={styles.title} lightColor="#000" darkColor="#fff">
              Welcome back!
            </Text>

            <StyledTextInput
              icon={<ProfileIcon width={20} height={20} color="#828895" />}
              placeholder="Email or username"
              placeholderTextColor={`#828895`}
              onChangeText={formik.handleChange("email")}
              value={formik.values.email}
              autoCapitalize="none"
              onBlur={formik.handleBlur("email")}
            />

            <StyledTextInput
              placeholder="Password"
              placeholderTextColor={`#828895`}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={formik.handleChange("password")}
              value={formik.values.password}
              onBlur={formik.handleBlur("password")}
            />

            <Button text="Login" onPress={() => formik.handleSubmit()} />

            <View style={styles.footer}>
              <PoppinsRegularText style={styles.footerText}>
                Don't have an account?
              </PoppinsRegularText>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
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
    color: BlueSecondary100,
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

const mapStateToProps = (state: RootState): IConnectedState => ({
  user: state.user,
});

const mapDispatchToProps = {
  removeUserDispatch: removeUser,
  setUserDispatch: setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
