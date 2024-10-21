import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {colors} from '../styles/colors';
import {textStyles} from '../styles/text';

const Header = (props: BottomTabHeaderProps) => {
  const headerStyle = props.options.headerStyle || {paddingTop: 64};

  return (
    <View style={[styles.container, headerStyle]}>
      <Text style={[textStyles.header, styles.text]}>{props.route.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  text: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
  },
});
