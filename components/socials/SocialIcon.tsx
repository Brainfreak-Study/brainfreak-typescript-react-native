import {
    Image,
    TouchableOpacity,
    StyleSheet,
    useColorScheme,
} from "react-native";
import React from "react";

interface SocialIconProps {
    image: any;
}

const SocialIcon = ({ image }: SocialIconProps) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity
            style={[
                styles.socialMediaIcon,
                colorScheme === "dark"
                    ? styles.socialMediaIconDark
                    : styles.socialMediaIconLight,
            ]}
        >
            <Image source={image} style={styles.socialMediaIconImage} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    socialMediaIconImage: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
});

export default SocialIcon;
