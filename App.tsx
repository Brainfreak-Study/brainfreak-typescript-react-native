import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { persistor, store } from "./redux/store";
import Toast from "react-native-toast-message";
import { toastConfig } from "./components/toasts/toastConfig";
import WebSocketProvider from "@services/socket";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <WebSocketProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
              <Toast config={toastConfig} />
            </WebSocketProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    );
  }
}
