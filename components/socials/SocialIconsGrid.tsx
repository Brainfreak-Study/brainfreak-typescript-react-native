import {
    Platform,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ViewProps,
} from "react-native";
import React from "react";
import SocialIcon from "./SocialIcon";

//Images Import
import Apple from "../../assets/images/icons/apple.png";
import Google from "../../assets/images/icons/google.png";
import Facebook from "../../assets/images/icons/facebook.png";
import AppleWhite from "../../assets/images/icons/apple-white.png";

interface SocialIconsGridProps extends ViewProps {}

const SocialIconsGrid = ({ style, ...props }: SocialIconsGridProps) => {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.socialMediaLoginIcons, style]} {...props}>
            {Platform.OS === "ios" ? (
                colorScheme === "dark" ? (
                    <SocialIcon image={AppleWhite} />
                ) : (
                    <SocialIcon image={Apple} />
                )
            ) : (
                <SocialIcon image={Google} />
            )}
            <SocialIcon image={Facebook} />
        </View>
    );
};

export default SocialIconsGrid;

const styles = StyleSheet.create({
    socialMediaLoginIcons: {
        flexDirection: "row",
    },
});
