/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
} from 'native-base';
import MyCard from './Card';
export default class DellsScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <ScrollView>
            <MyCard />
            <MyCard />
            <MyCard />
          </ScrollView>
        </Content>
      </Container >
    );
  }
}
