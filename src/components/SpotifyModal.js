import React from 'react';
import { Modal as RNModal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const SpotifyModal = ({ visible, closeModal, openSpotify }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={closeModal}
      backdropOpacity={0.7}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>“Burner” wants to open “Spotify”</Text>
        <View style={styles.modalButtonsContainer}>
          <TouchableOpacity
            style={{ ...styles.modalButton, }}
            onPress={closeModal}
          >
            <Text style={{ color: 'black' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.modalButton, }}
            onPress={() => {
              openSpotify();
              closeModal();
            }}
          >
            <Text style={{ color: 'black' }}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default SpotifyModal;
