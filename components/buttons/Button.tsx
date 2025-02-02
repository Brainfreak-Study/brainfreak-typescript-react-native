import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";
import { BluePrimary50 } from "../../constants/colorScheme";
import { PoppinsRegularText } from "../StyledText";

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    textStyle?: StyleProp<TextStyle>;
}

const Button = ({ text, style, textStyle, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} {...props}>
            <PoppinsRegularText style={[styles.buttonText, textStyle]}>
                {text}
            </PoppinsRegularText>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: BluePrimary50,
        padding: 10,
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 12,
    },
    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 15,
    },
});
