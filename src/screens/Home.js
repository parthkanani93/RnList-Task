import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  DeviceEventEmitter,
} from 'react-native';
import Card from '../components/Card';
import {getData} from '../utils/apis';

const Home = ({navigation}) => {
  const [listData, setListData] = useState([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => {
    getDataFromApi();
  }, []);
  DeviceEventEmitter.addListener('event.patch', eventData => {
    getDataFromApi();
  });

  const getDataFromApi = () => {
    getData({
      offset,
      loading,
      isListEnd,
      setOffset,
      setListData,
      setLoading,
      setIsListEnd,
      listData,
    });
  };

  const renderCard = useCallback(
    ({item, index}) => {
      return (
        <Pressable onPress={() => onPressCard({item})} key={index.toString()}>
          <Card item={item} />
        </Pressable>
      );
    },
    [listData],
  );

  const onPressCard = ({item}) => {
    navigation.navigate('Detail', {
      item: item,
    });
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={listData}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onEndReached={getDataFromApi}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default Home;
