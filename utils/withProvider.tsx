import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function withSafeAreaProvider<P extends object>(
    Component: React.ComponentType<P>
) {
    return function (props: P) {
        return (
            <SafeAreaProvider>
                <Component {...props} />
            </SafeAreaProvider>
        );
    };
}
