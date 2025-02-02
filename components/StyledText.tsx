import { Text, TextProps, useThemeColor } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function PoppinsRegularText(props: TextProps) {
  const backgroundColor = useThemeColor(
    { light: props.lightColor, dark: props.darkColor },
    "background"
  );
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "poppins-regular", flexWrap: "wrap" }]}
    />
  );
}

export function PoppinsMediumText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-medium" }]} />
  );
}

export function PoppinsBoldText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-bold" }]} />
  );
}

export function PoppinsSemiBoldText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "poppins-semibold" }]}
    />
  );
}

export function PoppinsItalicText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-italic" }]} />
  );
}
