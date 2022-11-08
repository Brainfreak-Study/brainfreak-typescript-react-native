import React from "react";
import {
    Image,
    ImageProps,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import Modal from "react-native-modal";
import { PoppinsRegularText } from "../StyledText";
import useColorScheme from "../../hooks/useColorScheme";
import CloseIcon from "../icons/CloseIcon";
import CameraIcon from "../icons/CameraIcon";
import GalleryIcon from "../icons/GalleryIcon";

interface AvatarProps extends ImageProps {
    onChange?: (file: any) => void;
}

export const Avatar = ({ style, ...props }: AvatarProps) => {
    const colorScheme = useColorScheme();
    const [uri, setUri] = React.useState<string>("");
    const [visible, setVisible] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<any>(undefined);
    const close = () => setVisible(false);
    const open = () => setVisible(true);

    const chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result);
            setUri(result.uri);
            close();
        }
    };

    const openCamera = async () => {
        if (ImagePicker.PermissionStatus.UNDETERMINED) {
            const { status } =
                await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!"
                );
            }
        }

        if (ImagePicker.PermissionStatus.GRANTED) {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.cancelled) {
                setImage(result);
                setUri(result.uri);
                close();
            }
        }
    };

    return (
        <>
            <TouchableOpacity onPress={open}>
                <View style={styles.avatarItems}>
                    <Image
                        style={[styles.avatar, style]}
                        {...props}
                        source={uri ? { uri } : props.source}
                    />
                    <PoppinsRegularText>
                        Edit Profile Picture
                    </PoppinsRegularText>
                </View>
            </TouchableOpacity>
            <Modal
                isVisible={visible}
                onBackButtonPress={close}
                onBackdropPress={close}
                style={styles.modal}
            >
                <SafeAreaView>
                    <View
                        style={[
                            styles.options,
                            colorScheme === "dark"
                                ? styles.optionsDark
                                : styles.optionsLight,
                            { width: "100%" },
                        ]}
                    >
                        <TouchableOpacity
                            onPress={chooseImage}
                            style={[
                                styles.option,
                                colorScheme === "dark"
                                    ? styles.optionDark
                                    : styles.optionLight,
                            ]}
                        >
                            <GalleryIcon color="#1e90ff" />
                            <PoppinsRegularText style={styles.optionText}>
                                Choose from Gallery
                            </PoppinsRegularText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openCamera}
                            style={[
                                styles.option,
                                colorScheme === "dark"
                                    ? styles.optionDark
                                    : styles.optionLight,
                            ]}
                        >
                            <CameraIcon color="#1e90ff" />
                            <PoppinsRegularText style={styles.optionText}>
                                Open Camera
                            </PoppinsRegularText>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            styles.options,
                            colorScheme === "dark"
                                ? styles.optionsDark
                                : styles.optionsLight,
                            { width: "100%" },
                        ]}
                    >
                        <TouchableOpacity
                            onPress={close}
                            style={[
                                styles.option,
                                colorScheme === "dark"
                                    ? styles.optionDark
                                    : styles.optionLight,
                            ]}
                        >
                            <CloseIcon
                                width={24}
                                height={24}
                                color="red"
                                style={[{ color: "red" }] as any}
                            />
                            <PoppinsRegularText
                                style={[styles.optionText, { color: "red" }]}
                            >
                                Close
                            </PoppinsRegularText>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    avatar: {
        paddingTop: 20,
        height: 100,
        width: 100,
        borderRadius: 100,
        padding: 20,
        marginBottom: 5,
    },
    avatarItems: {
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    options: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
    },
    optionsDark: {
        backgroundColor: "#000",
    },
    optionsLight: {
        backgroundColor: "#fff",
    },
    option: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "100%",
    },
    optionDark: {
        backgroundColor: "rgba(255,255,255,0.1)",
    },
    optionLight: {
        backgroundColor: "#ccc",
    },

    optionText: {
        marginLeft: 10,
        fontSize: 16,
    },
});
