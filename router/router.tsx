import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconEnum} from '../shared/types/icon.type';
import {colors} from '../shared/styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import TabIcon from '../shared/components/tab-icon.component';
import TodayJoke from '../screens/today-joke.screen';
import HistoryScreen from '../screens/history.screen';
import Favorites from '../screens/favorites.screen';
import Header from '../shared/components/header.component';
import Fonts from '../shared/styles/fonts';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const TodayIcon = (props: IconProps) => (
  <TabIcon {...props} icon={IconEnum.Today} />
);
const HistoryIcon = (props: IconProps) => (
  <TabIcon {...props} icon={IconEnum.History} />
);
const FavoriteIcon = (props: IconProps) => (
  <TabIcon {...props} icon={IconEnum.Favorite} />
);

const NavigationRouter = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: Header,
          tabBarStyle: {
            minHeight: 100,
            padding: 10,
            paddingBottom:
              Platform.OS === 'android' ? insets.bottom + 24 : insets.bottom,
            borderTopWidth: 1,
            borderTopColor: colors.lightGrey,
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.INTER_SEMIBOLD,
            fontSize: 12,
            lineHeight: 16,
            fontWeight: 'semibold',
            letterSpacing: 0.2,
          },
          headerStyle: {
            paddingTop: insets.top + 64,
          },
          tabBarActiveTintColor: colors.violet,
        }}>
        <Tab.Screen
          name="Today"
          component={TodayJoke}
          options={{
            tabBarIcon: TodayIcon,
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: HistoryIcon,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: FavoriteIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
