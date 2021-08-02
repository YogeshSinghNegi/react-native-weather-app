import * as AppColors from '../utils/AppColors';

import { SectionList, StyleSheet, Text } from 'react-native';

import ListItem from './ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Moment from 'moment';
import React from 'react';

const WeatherList = (props) => {
    return (
        <SectionList
            sections = { props.data }
            keyExtractor = { (item, index) => item.dt_txt }
            renderItem = {({ item }) => (
              <ListItem item={item} />
            )}
            ItemSeparatorComponent = { ListItemSeparator }
            renderSectionHeader = {({ section }) => (
              <Text style={Styles.header}> 
                {Moment(section.key, 'YYYY-MM-DD').format('DD MMM, ddd')} 
              </Text>
            )}
        />
    );
};

const Styles = StyleSheet.create({
    header: {
        fontSize: 20,
        padding: 15,
        backgroundColor: AppColors.darkColor,
        color: AppColors.whiteColor,
      }
});

export default WeatherList;