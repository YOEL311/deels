/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';


export default class Swiper extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={1}
          showPagination
        >

          <View >
            <Image
              source={{
                uri:
                  'http://s3.amazonaws.com/estock/fspid10/15/77/01/8/paris-parigi-eiffelturm-1577018-o.jpg',
              }}
              style={styles.child}
            />
          </View>
          <View style={styles.child}>
            <Image
              source={{
                uri:
                  'http://news.nativcell.com/news/2019/7/4335a2085191b528c708.jpg',
              }}
              style={styles.child}
            />
          </View>




          <View style={styles.child}>
            <Image
              source={{
                uri:
                  'http://s3.amazonaws.com/estock/fspid1/45900/lakepowell-page-arizona-45944-h.jpg',
              }}
              style={styles.child}
            />
          </View>



          
        </SwiperFlatList>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height: height * 0.4,
    width: width * 0.90,
    justifyContent: 'center',
    resizeMode: 'contain',
    // borderRadius: height * 0.4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden'


  },

});
