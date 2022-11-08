import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PoppinsRegularText } from "../StyledText";

interface IResendTimer {
    onPress: () => void;
}

const ResendTimer = ({ onPress }: IResendTimer) => {
    const [resendTimer, setResendTimer] = React.useState(60);
    const [resendTimerActive, setResendTimerActive] = React.useState(false);

    const handleResend = React.useCallback(() => {
        if (resendTimerActive) return;
        setResendTimer(60);
        setResendTimerActive(true);
        onPress();
    }, [resendTimerActive]);

    React.useEffect(() => {
        if (resendTimerActive) {
            const timer = setTimeout(() => {
                if (resendTimer > 0) {
                    setResendTimer(resendTimer - 1);
                } else {
                    setResendTimerActive(false);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer, resendTimerActive]);

    return (
        <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
            <PoppinsRegularText style={styles.resendText}>
                {resendTimerActive
                    ? `Resend OTP in ${resendTimer} seconds`
                    : "Resend OTP"}
            </PoppinsRegularText>
        </TouchableOpacity>
    );
};

export default React.memo(ResendTimer);

const styles = StyleSheet.create({
    resendButton: {
        alignSelf: "center",
        marginTop: 20,
    },
    resendText: {
        color: "#4d47c3",
    },
});
