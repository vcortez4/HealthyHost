import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class BackgroundScreen extends React.PureComponent {

  static navigationOptions = () => ({
    title: 'Healthy Host',
    headerTintColor: 'white',
    headerBackTitle: "Back",
    headerStyle: {
      backgroundColor: 'royalblue'
    }
  });

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
    //var string = I18n.locale;

    //var n = string.localeCompare("hmn");

    Output = []

    //if (n == 0) {
    Output.push(<Button key={0} onPress={() => { alert("Coming Soon!", "Will play audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Play</Text></Button>);
    Output.push(<Button key={1} onPress={() => { alert("Coming Soon!", "Audio will pause.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Pause</Text></Button>);
    Output.push(<Button key={2} onPress={() => { alert("Coming Soon!", "Audio will stop.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Stop</Text></Button>);
    //}
    return Output;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {/* Displays entire background in current language */}
          <Text style={{ fontSize: 22, color: "black", paddingLeft: 10, paddingRight: 10 }}>{I18n.t('Settings.Background')}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});