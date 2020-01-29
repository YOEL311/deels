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

const MyCard = () => {
    return (
        <View>
            <Card style={{ flex: 0, backgroundColor: 'gray' }}>
                <CardItem style={{ backgroundColor: '#A9A9A9' }}>
                    <Left>
                        <Thumbnail
                            source={require('../screens/plane.png')} />
                        <Body>
                            <Text >
                                jhjkhk
                    </Text>
                            <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem>
                    <Left>
                        <Body>
                            <DetailsDeel />
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Swiper />
                </CardItem>

                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon
                                onPress={() => console.log('on prees share')}
                                name="share"
                            />
                        </Button>
                    </Left>

                </CardItem>
            </Card>
        </View>
    );
};
const DetailsDeel = () => {
    return (
        <View>
            <Text  >Your text here</Text>
            <TouchableHighlight onPress={() => console.log('onPrees show more')}>
                <Text style={{ color: 'gray', fontSize: 13 }} uppercase={false}>Show more...</Text>
            </TouchableHighlight>
        </View>
    )
}

export default MyCard;