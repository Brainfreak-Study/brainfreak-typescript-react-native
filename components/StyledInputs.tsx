import { TextInput, TextInputProps } from "react-native";
import { useThemeColor } from "./Themed";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

type Props = TextInputProps & ThemeProps;

export function PoppinsRegularInput(props: Props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
    return (
        <TextInput
            {...props}
            style={[{ fontFamily: "poppins-regular", color }, style]}
            {...otherProps}
        />
    );
}
