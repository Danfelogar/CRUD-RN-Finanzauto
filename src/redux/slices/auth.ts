import {JWT_SECRET_KEY} from '@env';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {AuthState, LoginCredentials} from '../../types/auth';
import {
  TypeActions,
  TypeMSMErrorGeneric,
  TypeSlices,
  TypeStateAuth,
  createJwtToken,
} from '../../utils';

const INITIAL_CREDENTIALS = {
  name: '',
  email: '',
  photo: '',
};

const initialState: AuthState = {
  loading: false,
  credentials: INITIAL_CREDENTIALS,
  isLogin: TypeStateAuth.Logout,
  isShowOnboarding: true,
  msmError: '',
  token: '',
  showMsmError: false,
};

export const authSlice = createSlice({
  name: TypeSlices.Auth,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCredentials: (
      state,
      action: PayloadAction<AuthState['credentials']>,
    ) => {
      state.credentials = action.payload;
      state.isLogin = TypeStateAuth.Login;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLogout: state => {
      state.credentials = INITIAL_CREDENTIALS;
      state.isLogin = TypeStateAuth.Logout;
    },
    setIsShowOnboarding: state => {
      state.isShowOnboarding = !state.isShowOnboarding;
    },
    setMsmError: (state, action: PayloadAction<string>) => {
      state.msmError = action.payload;
      state.showMsmError = true;
    },
    clearMsmError: state => {
      state.msmError = '';
      state.showMsmError = false;
    },
  },
});

export const {
  setLoading,
  setCredentials,
  setLogout,
  setIsShowOnboarding,
  setMsmError,
  setToken,
  clearMsmError,
} = authSlice.actions;

export const signIn = createAsyncThunk(
  TypeActions.AuthSignIn,
  async (credentials: LoginCredentials, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const {email, password} = credentials;
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      const authCredentials = {
        email: userCredential.user.email as string,
        name: userCredential.user.displayName as string,
        photo: userCredential.user.photoURL as string,
      };
      //emulate JWT
      const token = createJwtToken(authCredentials, JWT_SECRET_KEY);
      dispatch(setToken(token));
      dispatch(setCredentials(authCredentials));
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const signOut = createAsyncThunk(
  TypeActions.AuthSignOut,
  async (_, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      await auth().signOut();
      dispatch(setLogout());
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const signWithGoogle = createAsyncThunk(
  TypeActions.AuthSignInGoogle,
  async (_, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      const authCredentials = {
        email: userCredential.user.email as string,
        name: userCredential.user.displayName as string,
        photo: userCredential.user.photoURL as string,
      };
      const token = createJwtToken(authCredentials, JWT_SECRET_KEY);
      dispatch(setToken(token));
      dispatch(setCredentials(authCredentials));
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export default authSlice.reducer;
