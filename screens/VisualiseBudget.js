import React from 'react';
import {View, Button, Text, Image, StyleSheet, FlatList} from 'react-native'

const VisualiseBudget = () => {

    return (
        <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <Text style ={{ fontSize: 30}}>Visualise Your budget</Text>
        <Image
        style={styles.logo}
        source={require('../screens/pie-chart.png')}
              />
        <FlatList
        data={[
          {key : 'Flat'},
          {key: 'Health'},
          {key: 'Food'},
          {key: 'Pet'},
          {key: 'Hobby'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
        </View>
      
      );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  
  logo: {
    width: 266,
    height: 258,
  },
   item: {
     padding: 10,
     fontSize: 12,
     height: 40,
     marginVertical: 18,
    marginHorizontal: 16,
    backgroundColor:'#AFABAA',
   },
});

export default VisualiseBudget