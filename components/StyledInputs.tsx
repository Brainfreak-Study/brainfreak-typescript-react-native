import { TextInput, TextInputProps } from "react-native";

export function PoppinsRegularInput(props: TextInputProps) {
    return (
        <TextInput
            {...props}
            style={[props.style, { fontFamily: "poppins-regular" }]}
        />
    );
}
