import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import ReactNativeModal from "react-native-modal";
import { PoppinsRegularText } from "../StyledText";
import { View } from "../Themed";

interface IProps {
    visible: boolean;
    onClose: () => void;
    items: IItem[];
}

interface IItem {
    text: string;
    icon: React.ReactNode;
    onPress: () => void;
}

const ModelCenter = ({ visible, onClose, items }: IProps) => {
    return (
        <ReactNativeModal
            isVisible={visible}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            style={styles.modal}
            testID="modal"
        >
            {/* <SafeAreaView> */}
            <View darkColor="#000" lightColor="#fff" style={styles.container}>
                {items?.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={item.onPress}
                        style={styles.item}
                    >
                        {item.icon}
                        <PoppinsRegularText style={styles.itemText}>
                            {item.text}
                        </PoppinsRegularText>
                    </TouchableOpacity>
                ))}
            </View>
            {/* </SafeAreaView> */}
        </ReactNativeModal>
    );
};

export default ModelCenter;

const styles = StyleSheet.create({
    modal: {
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    item: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    itemText: {
        fontSize: 14,
        marginLeft: 10,
    },
});
