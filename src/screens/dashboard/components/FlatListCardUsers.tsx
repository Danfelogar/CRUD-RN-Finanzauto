import {useEffect, useId} from 'react';
import {View, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import {getDataUsers} from '../../../redux/slices/userData';
import {RootState, useAppDispatch} from '../../../redux/store';

import {CardUser} from '.';

export const FlatListCardUsers = () => {
  const flatListID = useId();

  const dispatch = useAppDispatch();
  const {pagination} = useSelector((state: RootState) => state.settings);
  const {arrUserData} = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    if (pagination.pageNumber === 1) {
      dispatch(getDataUsers({}));
    }
  }, []);

  const getMoreUserData = () => {
    if (
      pagination.pageNumber !== 0 &&
      pagination.pageNumber &&
      pagination.pageNumber + 1 <= pagination.totalPage!
    ) {
      dispatch(getDataUsers({pageNumber: pagination.pageNumber + 1}));
    }
  };

  return (
    <FlatList
      testID="userData-list"
      style={{width: '100%', margin: 10, paddingHorizontal: 6}}
      key={flatListID}
      data={arrUserData}
      renderItem={({item}) => <CardUser user={item} />}
      keyExtractor={item => item.id}
      numColumns={1}
      onEndReached={() => {
        if (pagination.totalData! > arrUserData.length) {
          getMoreUserData();
        }
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <View
          style={{
            width: '100%',
            display:
              pagination.pageNumber! + 1 <= pagination.totalPage!
                ? 'flex'
                : 'none',
            justifyContent: 'center',
          }}>
          <ActivityIndicator testID="loading-indicator-2" />
        </View>
      }
    />
  );
};
