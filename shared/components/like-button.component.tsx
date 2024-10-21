import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Favorite from '../../assets/icons/favorite-white.svg';
import FavoriteFocused from '../../assets/icons/favorite-purple.svg';
import {colors} from '../styles/colors';
import {StyleProps} from 'react-native-reanimated';

type LikeButtonProps = {
  isLiked: boolean;
  style?: StyleProps;
  onPress: (value?: any) => void;
};

const LikeButton = ({isLiked, style, onPress}: LikeButtonProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: isLiked ? colors.violet : colors.lightViolet},
        style,
      ]}
      onPress={onPress}>
      {isLiked ? <Favorite /> : <FavoriteFocused />}
    </Pressable>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 36,
    alignSelf: 'flex-start',
  },
});
