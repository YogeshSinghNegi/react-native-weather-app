import * as AppColors from '../utils/AppColors';

import React from 'react';
import {View} from 'react-native';

const ListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: AppColors.darkColor,
        }}
      />
    );
  }

  export default ListItemSeparator;