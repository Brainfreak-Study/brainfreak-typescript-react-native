/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ColorSchemeName, TouchableOpacity, View } from "react-native";
import AddCircleIcon from "../components/icons/AddCircleIcon";
import AddIcon from "../components/icons/AddIcon";
import LiveIcon from "../components/icons/LiveIcon";
import MessageIcon from "../components/icons/MessageIcon";
import QuestionIcon from "../components/icons/QuestionIcon";
import SearchIcon from "../components/icons/SearchIcon";
import UserSquareIcon from "../components/icons/UserSquareIcon";
import Colors from "../constants/Colors";
import { BluePrimary25 } from "../constants/colorScheme";
import useColorScheme from "../hooks/useColorScheme";
import { useAppSelector } from "../redux/hooks";

import CreateAccountScreen from "../screens/auth-screens/CreateAccountScreen";
import LoginScreen from "../screens/auth-screens/LoginScreen";
import RegisterScreen from "../screens/auth-screens/RegisterScreen";
import VerifyEmailScreen from "../screens/auth-screens/VerifyEmailScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import AskQuestion from "../screens/secured-screens/AskQuestionScreen";
import LiveScreen from "../screens/secured-screens/LiveScreen";
import MessagesScreen from "../screens/secured-screens/MessagesScreen";
import MyProfileScreen from "../screens/secured-screens/MyProfileScreen";
import ProfileScreen from "../screens/secured-screens/ProfileScreen";
import QuestionScreen from "../screens/secured-screens/QuestionScreen";
import QuestionsScreen from "../screens/secured-screens/QuestionsScreen";
import SearchScreen from "../screens/secured-screens/SearchScreen";
import SettingsScreen from "../screens/secured-screens/SettingsScreen";
import TopUsersScreen from "../screens/secured-screens/TopUsersScreen";

import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";
import { withSafeAreaProvider } from "../utils/withProvider";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    const user = useAppSelector((state) => state.user);

    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            {user.isAuth ? <SecuredStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={} />
            </Stack.Group> */}
        </Stack.Navigator>
    );
}

function SecuredStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
            <Stack.Screen
                name="Question"
                component={withSafeAreaProvider(QuestionScreen)}
                options={({ route }: { route: any }) => ({
                    title: `${route.params?.subject} • ${route.params?.points} Points`,
                })}
            />
            <Stack.Screen
                name="TopUsers"
                component={TopUsersScreen}
                options={{ title: "Top Users" }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={} />
            </Stack.Group> */}
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Live"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="Live"
                component={withSafeAreaProvider(LiveScreen)}
                options={({ navigation }: RootTabScreenProps<"Live">) => ({
                    tabBarIcon: ({ color }) => <LiveIcon color={color} />,
                    headerShown: false,
                })}
            />
            <BottomTab.Screen
                name="Questions"
                component={withSafeAreaProvider(QuestionsScreen)}
                options={({ navigation }: RootTabScreenProps<"Questions">) => ({
                    tabBarIcon: ({ color }) => <QuestionIcon color={color} />,
                    headerShown: false,
                })}
            />
            <BottomTab.Screen
                name="AskQuestion"
                component={withSafeAreaProvider(AskQuestion)}
                options={({
                    navigation,
                }: RootTabScreenProps<"AskQuestion">) => ({
                    headerShown: false,
                    tabBarLabel: "Ask",
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                position: "absolute",
                                bottom: 10, // space from bottombar
                                height: 58,
                                width: 58,
                                borderRadius: 58,
                                backgroundColor: BluePrimary25,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <AddIcon width={40} height={40} color="white" />
                        </View>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Search"
                component={withSafeAreaProvider(SearchScreen)}
                options={({ navigation }: RootTabScreenProps<"Search">) => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => <SearchIcon color={color} />,
                })}
            />
            <BottomTab.Screen
                name="MyProfile"
                component={withSafeAreaProvider(MyProfileScreen)}
                options={({ navigation }: RootTabScreenProps<"MyProfile">) => ({
                    tabBarIcon: ({ color }) => <UserSquareIcon color={color} />,
                    headerShown: false,
                    title: "Profile",
                })}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
