import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const NextButton = ({ onPress, isLastSlide }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ backgroundColor: '#8A2BE2', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 50, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 18, marginRight: 8 }}>{isLastSlide ? 'Get Started' : 'Skip'}</Text>
                {!isLastSlide && <Image source={require('../img/next.png')} style={{ width: 24, height: 24 }} />}
            </View>
        </TouchableOpacity>
    );
};

NextButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    isLastSlide: PropTypes.bool.isRequired,
};

export default NextButton;
