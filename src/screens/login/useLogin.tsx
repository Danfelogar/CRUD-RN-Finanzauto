import {yupResolver} from '@hookform/resolvers/yup';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {useSelector} from 'react-redux';

import {clearMsmError, signIn, signWithGoogle} from '../../redux/slices/auth';
import {RootState, useAppDispatch} from '../../redux/store';
import {LoginCredentials} from '../../types/auth';
import {validateLogin} from '../../utils';

export function useLogin() {
  const [showPassword, setShowPassword] = useState(true);
  const toast = useToast();

  const dispatch = useAppDispatch();
  const {loading, msmError, showMsmError} = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (msmError && showMsmError) {
      toast.show(msmError, {
        type: 'danger',
        placement: 'top',
        duration: 4000,
        animationType: 'zoom-in',
      });

      dispatch(clearMsmError());
    }
  }, [showMsmError]);

  const handleOnChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formMethodsLogin = useForm<LoginCredentials>({
    resolver: yupResolver(validateLogin),
  });

  useEffect(() => {
    formMethodsLogin.reset();

    return () => {
      formMethodsLogin.reset();
    };
  }, []);

  const loginUser = (data: LoginCredentials) => {
    dispatch(signIn(data));
  };

  const loginUserWithGoogle = () => {
    dispatch(signWithGoogle());
  };

  return {
    //state
    showPassword,
    loading,
    //methods
    formMethodsLogin,
    //functions
    handleOnChangeShowPassword,
    loginUserWithGoogle,
    loginUser,
  };
}
