import React from "react";
import {
    Image,
    ImageProps,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
} from "react-native";
import { ImageOrVideo } from "react-native-image-crop-picker";
import * as ImagePicker from "expo-image-picker";

// import Modal from "react-native-modal";
import ProfileIcon from "../../assets/images/icons/profile.svg";
import { PoppinsRegularText } from "../StyledText";

interface AvatarProps extends ImageProps {
    onChange?: (file: ImageOrVideo) => void;
}

export const Avatar = ({ style, ...props }: AvatarProps) => {
    const [uri, setUri] = React.useState(undefined);
    const [visible, setVisible] = React.useState(false);
    const [image, setImage] = React.useState<any>(undefined);
    const close = () => setVisible(false);
    const open = () => setVisible(true);
    const chooseImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const openCamera = () => {
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        // });
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
                visible={visible}
                onRequestClose={close}
                style={{ justifyContent: "flex-end", margin: 0, height: 100 }}
                animationType="slide"
            >
                <SafeAreaView style={styles.options}>
                    <Pressable style={styles.option} onPress={chooseImage}>
                        <ProfileIcon width={24} height={24} />
                        <Text>Library </Text>
                    </Pressable>
                    <Pressable style={styles.option} onPress={openCamera}>
                        <ProfileIcon width={24} height={24} />
                        <Text>Camera</Text>
                    </Pressable>
                </SafeAreaView>
                <Pressable onPress={() => setVisible(!visible)}>
                    <Text>close</Text>
                </Pressable>
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

    options: {
        backgroundColor: "white",
        flexDirection: "row",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    option: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
