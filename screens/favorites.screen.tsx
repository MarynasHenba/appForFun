import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../shared/styles/colors';
import JokeItem from '../shared/components/joke-item.component';
import ItemSeparator from '../shared/components/item-separator.component';
import {useDispatch, useSelector} from 'react-redux';
import {getObjAsyncStorage} from '../shared/utils/async-storage.util';
import {Joke, loadHistory} from '../store/jokes-slice';

const Favorites = () => {
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
        data={history.filter((joke: Joke) => joke.liked)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <JokeItem {...item} />}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
