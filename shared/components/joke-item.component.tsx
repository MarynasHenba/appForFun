import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles} from '../styles/text';
import LikeButton from './like-button.component';
import {Joke, toggleLike} from '../../store/jokes-slice';
import { useDispatch } from 'react-redux';

const JokeItem = (item: Joke) => {
  const {joke, liked} = item;
  const dispatch = useDispatch();

  const toggleFavorites = async () => {
    dispatch(toggleLike(item));
  };

  return (
    <View style={styles.container}>
      <Text style={[textStyles.bodyText, styles.text]}>{joke}</Text>
      <LikeButton
        isLiked={liked}
        style={styles.button}
        onPress={toggleFavorites}
      />
    </View>
  );
};

export default JokeItem;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  text: {
    flexBasis: 'auto',
    flexShrink: 1,
  },
  button: {
    padding: 12,
    flexBasis: 'auto',
  },
});
