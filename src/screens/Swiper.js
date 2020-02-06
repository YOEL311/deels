/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const renderImages = (images) => {


  let swipImages = images.map((currImg) => {
    return (
      <View >
        <Image
          source={{
            uri: currImg.uri
          }}
          style={styles.child}
        />
      </View>
    )
  })
  return swipImages;
}
// export default class App extends PureComponent {
  // constractor(props){

  // }
  // return()
const Swiper = ({ images }) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={5}
        autoplayLoop
        index={1}
        showPagination
      >
        {renderImages(images)}
      </SwiperFlatList>
    </View>
  );

}
export default Swiper

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.4,
    width: width * 0.91,
    justifyContent: 'center',
    // resizeMode: 'contain',
    // borderRadius: height * 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden'
  },

});
