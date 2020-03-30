import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Container, Content} from 'native-base';
import MyCard from './Card';
import data from '../data.js';
import Notifi from '../Utilitis/Notifi';
class DellsScreen extends Component {
  renderCards = () => {
    let cards = data.map(curr => {
      return <MyCard data={curr} key={curr.title} />;
    });
    return cards;
  };

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <ScrollView>
            {/* <Notifi /> */}
            {this.renderCards()}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

import {connect} from 'react-redux';
const mapStateToProps = () => {
  // const { friends } = state || "hkjh"
  return {sss: 'ssgs '};
};

// export default connect(mapStateToProps)(DellsScreen);
export default DellsScreen;
