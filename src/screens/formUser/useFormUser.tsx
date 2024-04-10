import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Resolver, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';

import {
  getUserDataById,
  postDataUser,
  putDataUser,
  setIsUpdateUserData,
} from '../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../redux/store';
import {UserFormCreate, UserFormUpdate} from '../../types/userData';
import {validateUserDataCreate, validateUserDataUpdate} from '../../utils';

export const useFormUser = ({id}: {id: string | number}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const {initialValuesForUpdate, isUpdate} = useSelector(
    (state: RootState) => state.userData,
  );

  useEffect(() => {
    if (id && id !== '0') {
      dispatch(setIsUpdateUserData(true));
      dispatch(getUserDataById(id));
    }
  }, [id]);

  const formMethodsCreate = useForm<UserFormCreate>({
    resolver: yupResolver(validateUserDataCreate),
  });

  const formMethodsUpdate = useForm<UserFormUpdate>({
    resolver: yupResolver(validateUserDataUpdate) as Resolver<
      UserFormUpdate,
      any
    >,
  });

  useEffect(() => {
    if (isUpdate) {
      formMethodsCreate.reset();
      formMethodsUpdate.reset({...initialValuesForUpdate});
    }

    return () => {
      formMethodsCreate.reset();
      formMethodsUpdate.reset();
    };
  }, [isUpdate, initialValuesForUpdate]);

  const createOrUpdateUser = (data: UserFormCreate | UserFormUpdate) => {
    if (!isUpdate) {
      dispatch(postDataUser(data as UserFormCreate))
        .unwrap()
        .then(() => {
          navigation.goBack();
        });
    } else {
      dispatch(putDataUser(data as UserFormUpdate))
        .unwrap()
        .then(() => {
          navigation.goBack();
        });
    }
  };

  return {
    //state
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    dispatch,
    //functions
    createOrUpdateUser,
  };
};
