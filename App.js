import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, useWindowDimensions } from 'react-native';
import data from './src/data/data';
import SpotifyButton from './src/components/SpotifyButton';
import SpotifyModal from './src/components/SpotifyModal';
import { useState } from 'react';

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [spotifyOpened, setSpotifyOpened] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSpotifyLogin = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSpotify = () => {
    // Implement the logic to open Spotify
    console.log('Opening Spotify...');
    setSpotifyOpened(true);
    setCanProceed(true);
    closeModal();

    // Move to the next slide
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const RenderItem = ({ item, index }) => {
    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Image source={item.image} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }} />
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
        </View>
        {item.id === 1 && (
          <>
            <SpotifyButton onPress={() => handleSpotifyLogin()} />
            {modalVisible && <SpotifyModal visible={modalVisible} closeModal={closeModal} openSpotify={openSpotify} />}
          </>
        )}
        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' }}>
          <Text style={styles.itemTerms}>{item.terms}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          if (index < activeIndex || (index > 0 && !canProceed)) {
            // Skip rendering slides before the active index and slides after the first one until Spotify is opened
            return null;
          }
          return <RenderItem item={item} index={index} />;
        }}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
      />
      <StatusBar style="light" backgroundColor="#0D0D0C" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0C',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0D0D0C',
    height: '100%',
    paddingTop: 100,
  },
  itemTitle: {
    color: '#AA6DFF',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  itemSubtitle: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  itemTerms: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
