// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, useWindowDimensions } from 'react-native';
import data from './src/data/data';

export default function App() {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const RenderItem = ({item, index}) =>{
    return (
      <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
          <Image source={item.image} style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}/>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
          <View>
            <Text style={styles.itemTerms}>{item.terms}</Text>
          </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={({item, index}) => {
        return <RenderItem item={item} index={index} /> 
      }}
      keyExtractor={item => item.id}
      scrollEventThrottle={16}
      horizontal={true}
      bounces={false}
      pagingEnabled={true}
      showHorizontalScrollIndicator={true}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   
  itemContainer:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0D0D0C',
    height: '100%'
  },
  itemTitle: {
    color: '#AA6DFF',
    fontSize: 40,
    fontWeight: "700",
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  itemSubtitle: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  itemTerms: {
    color: 'rgba(249, 246, 254, 1)',
    fontSize: 12,
    fontWeight: "400",
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});
