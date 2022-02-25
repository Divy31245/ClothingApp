import UserActionTypes from "./user.types";

// FOR GOOGLE SIGNIN SAGA
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// FOR EMAIL SIGN IN SAGA

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFaliure = (error) => ({
  type: UserActionTypes.SIGN_IN_FALIURE,
  payload: error,
});

export const SignUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const SignUpFaliure = (error) => ({
  type: UserActionTypes.SIGN_UP_FALIURE,
  payload: error,
});

export const SignUpSuccess = ({user,additionalData}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {user,additionalData}
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutFaliure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FALIURE,
  payload: error,
});
