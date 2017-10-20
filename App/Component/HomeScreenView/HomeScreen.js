import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import FooterMenu from "../Footer";
import ProfilePastAdv from "../ProfileView/ProfilePastAdv";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./../Styles/HomeScreenStyle";

import HomeScreenHeader from "./HomeScreenHeader";
import HomeScreenBody from "./HomeScreenBody";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid>
        <Row size={10}>
          <HomeScreenHeader
            user={this.props.user}
            navigation={this.props.navigation}
          />
        </Row>
        <Row size={90}>
          <HomeScreenBody
            user={this.props.user}
            adventures={this.props.adventures}
            navigation={this.props.navigation}
          />
        </Row>
      </Grid>
    );
  }
}
// <Text>{JSON.stringify(this.props.token.headers || 1)}</Text>
// <Text>{Object.keys(this.props.token)}</Text>
// <Text>{JSON.stringify(this.props.token.data)}</Text>
