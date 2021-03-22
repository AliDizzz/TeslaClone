import React from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <carItem car={item} />}
            />
        </View>
    );
};

export default CarsList;