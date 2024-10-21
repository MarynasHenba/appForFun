import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import {StyleSheet, Text, View} from 'react-native';
import {textStyles} from '../shared/styles/text';
import {colors} from '../shared/styles/colors';
import {getObjAsyncStorage} from '../shared/utils/async-storage.util';
import {fetchJoke, loadTodayJoke, toggleLike} from '../store/jokes-slice';
import {useDispatch, useSelector} from 'react-redux';

import LikeButton from '../shared/components/like-button.component';

const TodayJoke = () => {
  const dispatch = useDispatch<any>();
  const todayJoke = useSelector((state: any) => state.jokes.todayJoke);

  useEffect(() => {
    const checkForNewJoke = async () => {
      const storedJoke = await getObjAsyncStorage('todayJoke');

      if (storedJoke) {
        dispatch(loadTodayJoke(storedJoke));
        const storedDate = dayjs(storedJoke.added_date);
        const today = dayjs();

        if (!storedDate.isSame(today, 'day')) {
          dispatch(fetchJoke());
        }
      } else {
        dispatch(fetchJoke());
      }
    };

    checkForNewJoke();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={[textStyles.mediumText]}>
        {todayJoke.joke ? todayJoke.joke : 'Loading...'}
      </Text>
      {todayJoke.joke && (
        <LikeButton
          isLiked={todayJoke.liked}
          onPress={() => dispatch(toggleLike(todayJoke))}
        />
      )}
    </View>
  );
};

export default TodayJoke;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
