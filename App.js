import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, useWindowDimensions } from 'react-native';
import data from './src/data/data';
import SpotifyButton from './src/components/SpotifyButton';
import SpotifyModal from './src/components/SpotifyModal';
import Pagination from './src/components/Pagination';
import NextButton from './src/components/NextButton';

export default function App() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [spotifyOpened, setSpotifyOpened] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = React.useRef(null);

  const handleSpotifyLogin = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSpotify = () => {
    // The logic to open Spotify
    console.log('Opening Spotify...');
    setSpotifyOpened(true);
    setCanProceed(true);
    closeModal();

    // Move to the next slide
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const RenderItem = ({ item, index }) => {
    const isFirstSlide = index === 0;
    const isLastSlide = index === data.length - 1;

    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        {isFirstSlide ? (
          <>
            <Image source={item.image} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }} />
            <View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
            </View>

            <>
              <SpotifyButton onPress={() => handleSpotifyLogin()} />
              {modalVisible && <SpotifyModal visible={modalVisible} closeModal={closeModal} openSpotify={openSpotify} />}
            </>

            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' }}>
              <Text style={styles.itemTerms}>{item.terms}</Text>
            </View>
          </>
        ) : (
          <>
            <View>
              <Text style={{ ...styles.itemTitle2, width: SCREEN_WIDTH / 1.3 }}>{item.title}</Text>
              <Text style={{ ...styles.itemSubtitle2, width: SCREEN_WIDTH / 1.5 }}>{item.subtitle}</Text>
            </View>

            <View style={{ width: SCREEN_WIDTH / 1.3, marginBottom: 80, marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Pagination totalSlides={data.length - 1} activeIndex={activeIndex - 1} />
              <NextButton onPress={() => handleSkipButtonClick()} isLastSlide={isLastSlide} />
            </View>


            <Image source={item.image} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }} />
            <View>
              <Text style={styles.itemTerms}>{item.terms}</Text>
            </View>
          </>
        )}
      </View>
    );
  };


  const handleSkipButtonClick = () => {
    if (activeIndex < data.length - 1) {
      // Move to the next slide
      const nextIndex = activeIndex + 1;

      // Calculate the offset to scroll to the next slide
      const offset = nextIndex;

      // Scroll to the next slide
      flatListRef.current.scrollToOffset({ animated: true, offset });

      // Set the activeIndex after scrolling to ensure synchronization
      setActiveIndex(nextIndex);
    } else {
      // Logic to handle "Get Started" button click (last slide) goes here
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
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
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  itemTitle2: {
    color: '#AA6DFF',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 10,
  },
  itemSubtitle2: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  itemTerms: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
