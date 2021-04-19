import ImageColors from 'react-native-image-colors';

export const getImageBgColor = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, { fallback: 'grey' });

  const backgroundColor =
    colors.platform === 'android' ? colors.dominant : colors.background;

  return { backgroundColor };
};
