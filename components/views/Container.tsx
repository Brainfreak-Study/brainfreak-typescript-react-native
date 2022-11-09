import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import React from "react";

interface IContainerProps extends ViewProps {
    children: React.ReactNode;
    style?: any;
    padding?: number;
    margin?: number;
    flex?: number;
}

const Container = (
    props: IContainerProps
): React.ReactElement<IContainerProps> => {
    const colorScheme = useColorScheme();
    return (
        <View
            style={[
                styles.container,
                colorScheme === "dark"
                    ? styles.containerDark
                    : styles.containerLight,
                props.padding && { padding: props.padding },
                props.margin && { margin: props.margin },
                props.flex && { flex: props.flex },
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
