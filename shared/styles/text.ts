import {StyleSheet} from 'react-native';

import Fonts from './fonts';
import { colors } from './colors';

export const textStyles = StyleSheet.create({
  header: {
    fontFamily: Fonts.INTER_BOLD,
    fontSize: 36,
    lineHeight: 48,
    color: colors.black,
    fontWeight: 'bold',
  },
  mediumText: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontSize: 24,
    lineHeight: 38,
    color: colors.black,
    fontWeight: 'semibold',
  },
  bodyText: {
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 16,
    lineHeight: 26,
    color: colors.black,
    fontWeight: 'medium',
  },
  smallText: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontSize: 12,
    lineHeight: 16,
    color: colors.black,
    fontWeight: 'semibold',
    letterSpacing: 0.2,
  },
});
