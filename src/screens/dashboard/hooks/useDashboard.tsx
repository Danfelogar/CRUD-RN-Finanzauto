import {useEffect} from 'react';
import {useToast} from 'react-native-toast-notifications';
import {useSelector} from 'react-redux';

import {
  clearMsmError,
  clearMsmSuccessful,
} from '../../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../../redux/store';

export const useDashboard = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const {msmError, showMsmError, msmSuccessful, showMsmSuccessful} =
    useSelector((state: RootState) => state.userData);

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

  useEffect(() => {
    if (msmSuccessful && showMsmSuccessful) {
      toast.show(msmSuccessful, {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'zoom-in',
      });

      dispatch(clearMsmSuccessful());
    }
  }, [showMsmSuccessful]);

  return {
    //state
    //methods
    dispatch,
    //functions
  };
};
