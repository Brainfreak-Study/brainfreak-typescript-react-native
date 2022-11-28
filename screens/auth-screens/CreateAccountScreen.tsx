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
import { Avatar } from "../../components/avatar/Avatar";
import ProfileIcon from "../../components/icons/ProfileIcon";
import SecureUserIcon from "../../components/icons/SecureUserIcon";
import { CreateAccountSchema } from "../../validations/createAccountValidation";
import { RootState } from "../../redux/store";
import { IUserState, removeUser, setUser } from "../../redux/slices/user";
import { connect } from "react-redux";

interface IConnectedDispatch {
  setUserDispatch: typeof setUser;
  removeUserDispatch: typeof removeUser;
}

interface IConnectedState {
  user: IUserState;
}

function CreateAccountScreen({
  navigation,
  user,
  setUserDispatch,
}: RootTabScreenProps<"CreateAccount"> & IConnectedDispatch & IConnectedState) {
  const colorScheme = useColorScheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: user?.email,
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);

      setUserDispatch({
        _id: values.name,
        username: values.username,
        email: values.email,
        isAuth: true,
        role: "user",
      });
    },
    validationSchema: CreateAccountSchema,
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
                    marginBottom: 4,
                  }}
                  onChange={onAvatarChange}
                  source={require("../../assets/images/illustrations/login.png")}
                />

                <StyledTextInput
                  placeholder="Name"
                  icon={<ProfileIcon width={20} height={20} color="#828895" />}
                  placeholderTextColor={`#828895`}
                  onChangeText={formik.handleChange("name")}
                  value={formik.values.name}
                  onBlur={formik.handleBlur("name")}
                  error={formik.touched.name && formik.errors.name}
                />
                <StyledTextInput
                  icon={
                    <SecureUserIcon width={20} height={20} color="#828895" />
                  }
                  placeholder="Username"
                  placeholderTextColor={`#828895`}
                  autoCapitalize="none"
                  onChangeText={formik.handleChange("username")}
                  value={formik.values.username}
                  onBlur={formik.handleBlur("username")}
                  error={formik.touched.username && formik.errors.username}
                />
                <StyledTextInput
                  placeholder="Password"
                  placeholderTextColor={`#828895`}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={formik.handleChange("password")}
                  value={formik.values.password}
                  onBlur={formik.handleBlur("password")}
                  error={formik.touched.password && formik.errors.password}
                />
                <StyledTextInput
                  placeholder="Confirm password"
                  placeholderTextColor={`#828895`}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={formik.handleChange("confirmPassword")}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur("confirmPassword")}
                  error={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />

                <Button
                  text="Create Account"
                  onPress={() => formik.handleSubmit()}
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

const mapStateToProps = (state: RootState): IConnectedState => ({
  user: state.user,
});

const mapDispatchToProps = {
  removeUserDispatch: removeUser,
  setUserDispatch: setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountScreen);
