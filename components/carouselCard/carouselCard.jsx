import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../form/carousel';
import data from '../utils/data'
const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Text style={styles.conteinerTitle}>   <Text style={styles.title}>MAGAZINE</Text>
        <Text style={styles.buttom}>Vedi tutte</Text></Text>
      <SafeAreaView style={styles.container}>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
          useScrollView={true}
        />
        {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
      </SafeAreaView>
    </View>


  )
}


export default CarouselCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
    marginTop: 0
  },
  title: {
    flex: 2,
  },
  buttom: {
    color:'orange',
    flex: 1,
    marginLeft: 100,
    marginRight:0,
  },
  conteinerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  }
});