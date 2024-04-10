import {useState} from 'react';

export const useCardUser = () => {
  const [isOpenModalDeleteUser, setIsOpenModalDeleteUser] = useState(false);

  const changeStateModalWarningForDelete = () => {
    setIsOpenModalDeleteUser(!isOpenModalDeleteUser);
  };
  return {
    //state
    isOpenModalDeleteUser,
    //methods
    //functions
    changeStateModalWarningForDelete,
  };
};
