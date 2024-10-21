import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {colors} from '../shared/styles/colors';
import JokeItem from '../shared/components/joke-item.component';
import ItemSeparator from '../shared/components/item-separator.component';
import {useDispatch, useSelector} from 'react-redux';
import {loadHistory} from '../store/jokes-slice';
import {getObjAsyncStorage} from '../shared/utils/async-storage.util';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const history = useSelector((state: any) => state.jokes.history);

  useEffect(() => {
    const fetchHistory = async () => {
      const storedHistory = await getObjAsyncStorage('allJokes');
      dispatch(loadHistory(storedHistory));
    };

    fetchHistory();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <JokeItem {...item} />}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
