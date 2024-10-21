import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconEnum} from '../types/icon.type';
import getIcon from '../utils/get-icon.util';

type TabsIconProps = {
  focused: boolean;
  icon?: IconEnum;
};

const TabIcon = (props: TabsIconProps) => {
  const Icon = getIcon(props.focused, props.icon);

  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: 2,
  },
});
