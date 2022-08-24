import {Dimensions, Platform} from 'react-native';
// import 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  primery10: '#EAF0EF',
  primery20: '#D5E1DF',
  primery40: '#ABC3BF',
  primery100: '#2D685E',
  secoundry100: '#F1D06B',
  secoundry200: '#F1D06B',
  titleTextColor: '#17233E',
  red10: '#FEF0F0',
  red100: '#F16B6B',
  netural10: '#F9FBFE',
  netural20: '#F5F7FB',
  netural40: '#E6EAF4',
  netural60: '#8898BE',
  netural80: '#556283',
  danger: '#D35959',
  border: '#6BF1784F',
};

const spacesFrom1 = Array.from({length: 64}, (_, i) => i + 1);
const spaces = [0.5, ...spacesFrom1];
const spacesMultiplier = spaces.map(space => space * 4);

const fontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const fontSize = {
  buttonText: 18,
  largeTitle: 32,
  mediumTitle: 24,
  xmediumTitle: 22,
  smallTitle: 20,
  largeText: 24,
  xMediumText: 23,
  mediumText: 20,
  normalText: 18,
  xnormalText: 17,
  smallText: 16,
  xsmallText: 15,
  xxsmallText: 14,
};

const paddings = {
  top: spacesMultiplier[5],
  horizontal: spacesMultiplier[5],
};

const X_WIDTH = 375;
const X_HEIGHT = 812;
const SE_HEIGHT = 667;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const XII_WIDTH = 390;
const XII_HEIGHT = 844;
const XIII_WIDTH = 428;
const XIII_HEIGHT = 926;

const {height, width} = Dimensions.get('window');

const barHeight = () => {
  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if (width === X_WIDTH && height === X_HEIGHT) return 40;
    if (width === X_WIDTH && height === SE_HEIGHT) return 17;
    if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) return 41;
    if (width === XII_WIDTH && height === XII_HEIGHT) return 44;
    if (width === XIII_WIDTH && height === XIII_HEIGHT) return 44;
    return 20;
  }
  return 0;
};

const StatusBarHeight = Platform.select({
  ios: barHeight(),
  android: 0,
  default: 0,
});

const dimensions = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  statusBar: StatusBarHeight,
  bottomTabs: {
    height: 80,
    paddingBottom: spaces[5],
  },
  headerHeight: Platform.OS === 'ios' ? 64 : 50,
  artworkSummary: 140,
};

const animations = {
  bottomTabBar: {
    duration: 500,
  },
  discoverOverlay: {
    duration: 500,
  },
  discoverSwipe: {
    duration: 500,
  },
};

export const theme = {
  fontFamilies: {
    regular: 'Comfortaa Regular',
    text: 'Comfortaa_Thin',
    bold: 'Comfortaa-Bold',
    xbold: 'Comfortaa Light',
  },
  colors: {
    text: colors.black,
    buttonBorders: colors.primery100,
    background: colors.white,
    error: colors.red100,
    ...colors,
  },
  space: spacesMultiplier,
  fontWeights,
  paddings,
  dimensions,
  animations,
  fontSize,
};
