/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DummyQuestions from "./dummy-data/DummyQuestions";
import DummyUsers from "./dummy-data/DummyUsers";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    VerifyEmail: undefined;
    CreateAccount: undefined;
    Live: undefined;
    AskQuestion: undefined;
    Messages: undefined;
    Settings: undefined;
    Question: typeof DummyQuestions[0];
    TopUsers: undefined;
    Profile: typeof DummyUsers[0];
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    Login: undefined;
    Register: undefined;
    Live: undefined;
    Questions: undefined;
    Messages: undefined;
    MyProfile: undefined;
    VerifyEmail: undefined;
    CreateAccount: undefined;
    AskQuestion: undefined;
    Search: undefined;
    Settings: undefined;
    Question: { _id: string; subject: string; points: number };
    TopUsers: undefined;
    Profile: typeof DummyUsers[0];
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;
