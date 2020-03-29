import React, {PureComponent} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

const renderImages = images => {
  // console.log("render", images);
  let swipImages = images.map(currImg => {
    return (
      <View key={currImg.uri}>
        <Image source={{uri: currImg.uri}} style={styles.child} />
      </View>
    );
  });
  return swipImages;
};

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination>
          {renderImages(this.props.images)}
        </SwiperFlatList>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.4,
    width: width - 38,
    justifyContent: 'center',
    // resizeMode: 'contain',
    // borderRadius: height * 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
});
