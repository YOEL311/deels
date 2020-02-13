/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
} from 'native-base';
import MyCard from './Card';
import data from '../data.js'
import Notifi from '../Utilitis/Notifi'
export default class DellsScreen extends Component {

  renderCards = () => {
    let cards = data.map((curr) => {
      return (
        <MyCard data={curr} key={curr.title} />
      )
    })
    return cards
  }

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <ScrollView>
            <Notifi />
            {this.renderCards()}
          </ScrollView>

        </Content>
      </Container >
    );
  }
}
