import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISettingsState {
  allow_notifications: boolean;
  allow_push_notifications: boolean;
  allow_message_notifications: boolean;
  allow_email_notifications: boolean;
  allow_newFollower_notifications: boolean;
  allow_newAnswer_notifications: boolean;
  allow_newComment_notifications: boolean;
  allow_newLike_notifications: boolean;
}

const initialState: ISettingsState = {
  allow_notifications: true,
  allow_push_notifications: true,
  allow_message_notifications: true,
  allow_email_notifications: true,
  allow_newFollower_notifications: true,
  allow_newAnswer_notifications: true,
  allow_newComment_notifications: true,
  allow_newLike_notifications: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<ISettingsState>) => {
      action.payload.allow_notifications &&
        (state.allow_notifications = action.payload.allow_notifications);
      action.payload.allow_push_notifications &&
        (state.allow_push_notifications =
          action.payload.allow_push_notifications);
      action.payload.allow_message_notifications &&
        (state.allow_message_notifications =
          action.payload.allow_message_notifications);
      action.payload.allow_email_notifications &&
        (state.allow_email_notifications =
          action.payload.allow_email_notifications);
      action.payload.allow_newFollower_notifications &&
        (state.allow_newFollower_notifications =
          action.payload.allow_newFollower_notifications);
      action.payload.allow_newAnswer_notifications &&
        (state.allow_newAnswer_notifications =
          action.payload.allow_newAnswer_notifications);
      action.payload.allow_newComment_notifications &&
        (state.allow_newComment_notifications =
          action.payload.allow_newComment_notifications);
      action.payload.allow_newLike_notifications &&
        (state.allow_newLike_notifications =
          action.payload.allow_newLike_notifications);
    },

    removeSettings: (state) => {
      state.allow_notifications = true;
      state.allow_push_notifications = true;
      state.allow_message_notifications = true;
      state.allow_email_notifications = true;
      state.allow_newFollower_notifications = true;
      state.allow_newAnswer_notifications = true;
      state.allow_newComment_notifications = true;
      state.allow_newLike_notifications = true;
    },
  },
});

export const { setSettings, removeSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
