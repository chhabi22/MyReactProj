import React, { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const dummyArray = [
  { id: '1', value: 'The Alchemist' },
  { id: '2', value: 'Well Grounded' },
  { id: '3', value: 'CSS in easy steps' },
  { id: '4', value: 'Learning JavaScript' },
  { id: '5', value: 'The Secret' },
  { id: '6', value: 'Big Magic' },
  { id: '7', value: 'Computer History' },
  { id: '8', value: 'Girlboss' },
  { id: '9', value: 'Clean Architecture' },
  { id: '10', value: 'Design Architecture' },
  { id: '11', value: 'Bhagvadgita' },
  { id: '12', value: 'Biology Beliefs' },
  { id: '13', value: 'English is not easy' },
  { id: '14', value: 'Learning JavaScript' },
  { id: '15', value: 'The Secret' },
  { id: '16', value: 'Big Magic' },
  { id: '17', value: 'Computer History' },
  { id: '18', value: 'Girlboss' },
  { id: '19', value: 'Bhagvadgita' },
  { id: '20', value: 'Biology Beliefs' },
  { id: '21', value: 'English is not easy' },
  { id: '22', value: 'Learning JavaScript' }
];

const RecommendBooks = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({ item }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <View>
        <Text style={styles.item} onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: 'black' }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Value : ' + item.value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ebdaf7',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
 
export default RecommendBooks;