import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 110,
    };
  }

  render() {
    //width of child is 110
    const width = `${100 / parseInt(this.state.width / 110)}%`;
    return (
      <ScrollView>
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/restaurant_black_24dp.png')}
            />
            <Text>FOOD</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/health_and_safety_black_24dp.png')}
            />
            <Text>HEALTH</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/home_black_24dp.png')}
            />
            <Text>HOUSE/FLAT</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/pets_black_24dp.png')}
            />
            <Text>PET</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/family_restroom_black_24dp.png')}
            />
            <Text>FAMILY</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/self_improvement_black_24dp.png')}
            />
            <Text>MYSELF</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/surfing_black_24dp.png')}
            />
            <Text>HOBBY</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/school_black_24dp.png')}
            />
            <Text>EDUCATION</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/directions_car_black_24dp.png')}
            />
            <Text>TRANSPORT</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/help_black_24dp.png')}
            />
            <Text>CUSTOM 3</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/help_black_24dp.png')}
            />
            <Text>CUSTOM 3</Text>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <Image
              style={styles.box}
              source={require('./assets/help_black_24dp.png')}
            />
            <Text>CUSTOM 3</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  onLayout(e) {
    if (this.state.width !== e.nativeEvent.layout.width) {
      this.setState({
        width: e.nativeEvent.layout.width,
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 40,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  wrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
