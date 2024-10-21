import React from 'react';
import Today from '../../assets/icons/today.svg';
import TodayFocused from '../../assets/icons/today-purple.svg';
import History from '../../assets/icons/history.svg';
import HistoryFocused from '../../assets/icons/history-purple.svg';
import Favorite from '../../assets/icons/favorite.svg';
import FavoriteFocused from '../../assets/icons/favorite-purple.svg';
import {IconEnum} from '../types/icon.type';
import {SvgProps} from 'react-native-svg';

type IconComponent = React.FC<SvgProps>;

const TodayIcon = (props: SvgProps) => <Today {...props} />;
const TodayIconFocused = (props: SvgProps) => <TodayFocused {...props} />;
const HistoryIcon = (props: SvgProps) => <History {...props} />;
const HistoryIconFocused = (props: SvgProps) => <HistoryFocused {...props} />;
const FavoriteIcon = (props: SvgProps) => <Favorite {...props} />;
const FavoriteIconFocused = (props: SvgProps) => <FavoriteFocused {...props} />;

const getIcon = (focused: boolean, type?: IconEnum): IconComponent => {
  switch (type) {
    case IconEnum.Today:
      return focused ? TodayIconFocused : TodayIcon;
    case IconEnum.History:
      return focused ? HistoryIconFocused : HistoryIcon;
    case IconEnum.Favorite:
      return focused ? FavoriteIconFocused : FavoriteIcon;
    default:
      return TodayIcon;
  }
};

export default getIcon;
