import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {getUserDataById} from '../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../redux/store';

export const useDetails = ({id}: {id: number | string}) => {
  const {initialValuesForUpdate, loading} = useSelector(
    (state: RootState) => state.userData,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getUserDataById(id));
    }
  }, [id]);
  return {
    //state
    initialValuesForUpdate,
    loading,
    //methods
    //functions
  };
};
