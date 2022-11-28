import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import Flex from "@components/views/Flex";
import { Text } from "@components/Themed";
import { Image, StyleSheet, View } from "react-native";
import { BlueSecondary100 } from "@constants/colorScheme";
import {
  PoppinsMediumText,
  PoppinsRegularText,
  PoppinsSemiBoldText,
} from "@components/StyledText";
import Container from "@components/views/Container";
import { TruncateString } from "../../functions/TruncateString";

/*
  1. Create the config
*/
export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  messageToast: ({
    props,
  }: {
    props: {
      message: string;
      avatar: string;
      username: string;
    };
  }) => (
    <Flex
      style={styles.notification}
      direction="row"
      align="center"
      lightColor="#fff"
      darkColor="#1e1e1e"
    >
      <Image
        source={{
          uri: props.avatar,
        }}
        style={styles.avatar}
      />
      <Container
        padding={5}
        style={{ paddingHorizontal: 10 }}
        lightColor="#fff"
        darkColor="#1e1e1e"
      >
        <Flex
          direction="row"
          lightColor="#fff"
          darkColor="#1e1e1e"
          align="center"
        >
          <PoppinsSemiBoldText style={styles.username}>
            {props.username}
          </PoppinsSemiBoldText>
          <PoppinsMediumText style={styles.name}>
            sent you a message
          </PoppinsMediumText>
        </Flex>
        <View>
          <PoppinsRegularText>
            {TruncateString(props.message || "", 50)}
          </PoppinsRegularText>
        </View>
      </Container>
    </Flex>
  ),
};

const styles = StyleSheet.create({
  notification: {
    height: 80,
    padding: 10,
    width: "95%",
    maxWidth: 500,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 14,
    marginLeft: 5,
  },
  username: {
    fontSize: 14,
    // color: BlueSecondary100,
  },
});
