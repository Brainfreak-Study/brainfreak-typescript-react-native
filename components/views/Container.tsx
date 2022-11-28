import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { useThemeColor } from "@components/Themed";

interface IContainerProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
  padding?: number;
  margin?: number;
  flex?: number;
  lightColor?: string;
  darkColor?: string;
}

const Container = (
  props: IContainerProps
): React.ReactElement<IContainerProps> => {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: props.lightColor, dark: props.darkColor },
    "background"
  );

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark" ? styles.containerDark : styles.containerLight,
        props.padding && { padding: props.padding },
        props.margin && { margin: props.margin },
        props.flex && { flex: props.flex },
        { backgroundColor },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDark: {
    backgroundColor: "#000",
  },
  containerLight: {
    backgroundColor: "#fff",
  },
});
