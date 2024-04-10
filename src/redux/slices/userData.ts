import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {serviceBasePrivate} from '../../services/userData';
import {
  SingleUserData,
  UserDataState,
  UserFormCreate,
  UserFormUpdate,
} from '../../types/userData';
import {TypeActions, TypeMSMErrorGeneric} from '../../utils';

import {setPagination} from './settings';

export const initialValues_UserData_For_Create = {
  firstName: '',
  lastName: '',
  email: '',
};

export const initialValues_UserData_For_Update = {
  id: '',
  title: '',
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  dateOfBirth: '',
  registerDate: '',
  phone: '',
  picture: '',
  location: null,
};

const initialState: UserDataState = {
  loading: false,
  isUpdate: false,
  idForUpdate: null,
  initialValuesForCreate: initialValues_UserData_For_Create,
  initialValuesForUpdate: initialValues_UserData_For_Update,
  arrUserData: [],
  msmError: '',
  showMsmError: false,
  msmSuccessful: '',
  showMsmSuccessful: false,
};

export const userDataSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArrUserData: (state, action) => {
      state.arrUserData = [...state.arrUserData, ...action.payload];
    },
    resetArrUserData: state => {
      state.arrUserData = [];
    },
    setIsUpdateUserData: (state, action) => {
      state.isUpdate = action.payload;
    },
    setInitialValueUserDataForCreate: (state, action) => {
      state.initialValuesForCreate = action.payload.initialValues;
    },
    resetInitialValueUserDataForCreate: state => {
      state.initialValuesForCreate = initialValues_UserData_For_Create;
    },
    setInitialValueUserDataForUpdate: (state, action) => {
      state.initialValuesForUpdate = action.payload;
    },
    resetInitialValueUserDataForUpdate: state => {
      state.initialValuesForUpdate = initialValues_UserData_For_Update;
    },
    setIdForUpdate: (state, action) => {
      state.idForUpdate = action.payload;
    },
    setMsmError: (state, action: PayloadAction<string>) => {
      state.msmError = action.payload;
      state.showMsmError = true;
    },
    clearMsmError: state => {
      state.msmError = '';
      state.showMsmError = false;
    },
    setMsmSuccessful: (state, action: PayloadAction<string>) => {
      state.msmSuccessful = action.payload;
      state.showMsmSuccessful = true;
    },
    clearMsmSuccessful: state => {
      state.msmSuccessful = '';
      state.showMsmSuccessful = false;
    },
  },
});

export const {
  setLoading,
  setArrUserData,
  resetInitialValueUserDataForCreate,
  setInitialValueUserDataForCreate,
  resetInitialValueUserDataForUpdate,
  setInitialValueUserDataForUpdate,
  setIsUpdateUserData,
  setIdForUpdate,
  clearMsmError,
  setMsmError,
  clearMsmSuccessful,
  setMsmSuccessful,
  resetArrUserData,
} = userDataSlice.actions;

//extensions

export const getUserDataById = createAsyncThunk(
  TypeActions.UserDataGetById,
  async (id: number | string, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> = await serviceBasePrivate.get(
        `/user/${id}`,
      );

      if (response.data) {
        dispatch(setInitialValueUserDataForUpdate(response.data));
      }
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

interface PropsGets {
  pageNumber?: string | number;
  pageSize?: string | number;
}

export const getDataUsers = createAsyncThunk(
  TypeActions.UserDataGet,
  async ({pageNumber, pageSize}: PropsGets, {dispatch}) => {
    try {
      const response: ResGeneric<{
        data: SingleUserData[];
        total: number;
        page: number;
        limit: number;
      }> = await serviceBasePrivate.get('/user', {
        params: {
          ...(pageNumber && {page: pageNumber}),
          limit: 10,
        },
      });
      const {
        data: {data, limit, total},
      } = response;

      if (data) {
        dispatch(setArrUserData(data));
        dispatch(
          setPagination({
            totalPage: Math.floor(total / limit),
            ...(pageNumber && {pageNumber: Number(pageNumber) ?? 1}),
            ...(!pageSize ? {pageSize: 10} : {pageSize: limit}),
            ...(!pageNumber && {pageNumber: 1}),
            ...(total && {totalData: total}),
          }),
        );
      }
    } catch (error) {
      const err = error as {message: string};
      if (err.message) {
        dispatch(setMsmError(err.message));
        console.log({err});
      } else {
        dispatch(setMsmError(TypeMSMErrorGeneric.GenericError));
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const postDataUser = createAsyncThunk(
  TypeActions.UserDataCreate,
  async (props: UserFormCreate, {dispatch}) => {
    const {email, firstName, lastName} = props;
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> =
        await serviceBasePrivate.post(`/user/create`, {
          email,
          firstName,
          lastName,
        });

      if (response.data.id) {
        // definir un msm de exito aqui con toast de react native
        dispatch(setMsmSuccessful('Usuario creado exitosamente'));
        dispatch(setIsUpdateUserData(false));
        dispatch(resetInitialValueUserDataForCreate());
        dispatch(resetInitialValueUserDataForUpdate());
        dispatch(
          setPagination({
            pageSize: 10,
            pageNumber: 1,
            totalPage: 0,
            totalData: 0,
          }),
        );
        dispatch(resetArrUserData());
        dispatch(getDataUsers({pageSize: 10}));
      }
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

export const putDataUser = createAsyncThunk(
  'options/putDataUser',
  async (props: UserFormUpdate, {dispatch}) => {
    const {
      dateOfBirth,
      email,
      firstName,
      gender,
      lastName,
      picture,
      phone,
      registerDate,
      title,
      location,
    } = props;
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> = await serviceBasePrivate.put(
        `/user/${props.id}`,
        {
          dateOfBirth,
          email,
          firstName,
          gender,
          lastName,
          picture,
          phone,
          registerDate,
          title,
          location,
        },
      );

      if (response.data.id) {
        // definir un msm de exito aqui con toast de react native
        dispatch(
          setMsmSuccessful(
            `Usuario con id:${props.id} actualizado exitosamente`,
          ),
        );
        dispatch(setIsUpdateUserData(false));
        dispatch(resetInitialValueUserDataForCreate());
        dispatch(resetInitialValueUserDataForUpdate());
        dispatch(
          setPagination({
            pageSize: 10,
            pageNumber: 1,
            totalPage: 0,
            totalData: 0,
          }),
        );
        dispatch(resetArrUserData());
        dispatch(getDataUsers({pageSize: 10}));
      }
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

export const deleteSingleDataUser = createAsyncThunk(
  TypeActions.UserDataDelete,
  async (id: string | number, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<{id: string}> =
        await serviceBasePrivate.delete(`/user/${id}`);
      const idRes = response?.data?.id;
      if (idRes) {
        // definir un msm de exito aqui con toast de react native
        dispatch(
          setMsmSuccessful(
            `Usuario con id:${idRes} fue eliminado exitosamente`,
          ),
        );
        dispatch(
          setPagination({
            pageSize: 10,
            pageNumber: 1,
            totalPage: 0,
            totalData: 0,
          }),
        );
        dispatch(resetArrUserData());
        dispatch(getDataUsers({pageSize: 10}));
      }
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

export default userDataSlice.reducer;
