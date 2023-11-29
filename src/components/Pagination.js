import React from 'react';
import { View, StyleSheet } from 'react-native';

const Pagination = ({ totalSlides, activeIndex }) => {
    return (
        <View style={styles.paginationContainer}>
            {[...Array(totalSlides)].map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.paginationDot,
                        { backgroundColor: index === activeIndex ? '#AA6DFF' : '#FFFFFF' },
                        { width: index === activeIndex ? 35 : 10 },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default Pagination;
