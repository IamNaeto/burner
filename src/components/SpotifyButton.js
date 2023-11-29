import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

const SpotifyButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image source={require('../img/Spotify.png')} style={styles.icon} />
      <Text style={styles.text}>Continue with Spotify</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(249, 246, 254, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#0D0D0C',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    color: 'rgba(13, 13, 12, 1)',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SpotifyButton;
