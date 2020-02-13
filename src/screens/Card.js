/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import Swiper from './Swiper';
import Swiper2 from './Swiper';
import { Share } from "react-native"
import { format } from "date-fns";

const onShare = (props) => {
  Share.share(
    {
      title: "a title",
      message: "some message",
      url: "http://news.nativcell.com/news/2019/7/4335a2085191b528c708.jpgF"
    },
  );
}
const MyCard = ({ data }) => {
  // if () console.log(data.title);
  return (
    <View>
      <Card style={{ flex: 0 }}>
        <CardItem style={{ backgroundColor: '#ADD8E6' }}>
          <Left>
            <Thumbnail
              source={require('../assets/flight.png')} />
            <Body>
              <Text>
                Travel Tours
              </Text>
              {/* <Text note>{format(Date.now(), "MMMM d, yyyy")}</Text> */}
              <Text note>{renderDate(data.date)}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Left>
            <Body>
              <DetailsDeel details={data.details} />
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Swiper2 images={data.images} />
        </CardItem>

        <CardItem>
          <Left>
            <Button transparent>
              <Icon style={{paddingLeft:15,paddingRight:15}}
                onPress={() => {
                  onShare()
                  console.log('on prees share')
                }}
                name="share"
              />
            </Button>
          </Left>

        </CardItem>
      </Card>
    </View>
  );
};
import { useState } from 'react';

const DetailsDeel = ({ details }) => {
  const [more, setMore] = useState(false)
  return (
    <View>
      <Text numberOfLines={more ? 30 : 2}
        ellipsizeMode='tail'
      >
        {details}
      </Text>
      <TouchableHighlight onPress={() => {
        setMore(!more)
      }}>
        <Text style={{ color: 'gray', fontSize: 13 }} uppercase={false}>
          {more ? 'less' : 'Show more...'}
        </Text>
      </TouchableHighlight>
    </View>
  )
}
import { formatRelative, formatDistance, subDays } from 'date-fns'
import { he } from 'date-fns/locale'

const renderDate = (date) => {
  const datef = formatRelative(new Date(parseInt(date)), new Date(), { locale: he })
  return datef
}
export default MyCard;
