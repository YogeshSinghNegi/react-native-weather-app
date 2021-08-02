import * as AppColors from '../../utils/AppColors';

import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  
      body: {
        backgroundColor: AppColors.whiteColor,
      },
      itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      welcome: {
        color: AppColors.darkColor,
        marginBottom: 50,
        fontSize: 25,
        textAlign: 'center',
      },
});