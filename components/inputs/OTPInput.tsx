import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    useColorScheme,
} from "react-native";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const OTPInput = () => {
    const [value, setValue] = useState("");
    const colorScheme = useColorScheme();
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <KeyboardAvoidingView behavior="padding">
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[
                            styles.cellRoot,
                            colorScheme === "dark"
                                ? styles.cellRootDark
                                : styles.cellRootLight,
                            ,
                            isFocused && styles.focusCell,
                        ]}
                    >
                        <Text
                            style={[
                                styles.cellText,
                                colorScheme === "dark"
                                    ? styles.cellTextDark
                                    : styles.cellTextLight,
                            ]}
                        >
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
    );
};

export default OTPInput;

const styles = StyleSheet.create({
    root: { padding: 20, minHeight: 300 },
    title: { textAlign: "center", fontSize: 30 },
    codeFieldRoot: {
        marginTop: 20,
        width: 280,
        marginLeft: "auto",
        marginRight: "auto",
    },
    cellRoot: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
    },
    cellRootDark: {
        borderBottomColor: "#242424",
    },
    cellRootLight: {
        borderBottomColor: "#ccc",
    },
    cellText: {
        fontSize: 36,
        textAlign: "center",
    },
    cellTextDark: {
        color: "#fff",
    },
    cellTextLight: {
        color: "#000",
    },
    focusCell: {
        borderBottomColor: "#007AFF",
        borderBottomWidth: 2,
    },
});
