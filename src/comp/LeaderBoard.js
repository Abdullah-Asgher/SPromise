import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PlayerData} from '../Data/Data';
import {useFocusEffect} from '@react-navigation/native';
import TopUsers from '../Network/Users/TopUsers';
import {UserNo} from '../recoil/AddPromise';
import {useRecoilState} from 'recoil';
import {ToastAndroid} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {defaultImageURL} from '../source/UserProfile';

const LeaderBoard = () => {
  dataa = PlayerData;
  const [topUserList, setTopUserList] = useState([]);
  const [userN, setUserN] = useRecoilState(UserNo);
  const focus = useIsFocused();

  const fetchTopUs = async () => {
    // setPromises();
    await TopUsers(userN)
      .then(data => {
        // setNotificationList(data);
        // setIsLoading(false);
        setTopUserList(data);
        // console.log(data.description,"data.description");
        if (data.description === 'No data found.') {
          ToastAndroid.showWithGravityAndOffset(
            'There is no top user',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      })
      .catch(error => {
        console.error('Error fetching promises:', error);
        setIsLoading(false);
      });
  };

  // useFocusEffect(

  //   React.useCallback(() => {

  //     fetchTopUs();
  //   }, [])
  // );
  useEffect(() => {
    fetchTopUs();
  }, [focus]);

  const renderItem = ({item}) => (
    <View
      style={{
        width: '95%',
        height: hp(4.5),
        backgroundColor: '#E4EEE6',
        borderRadius: wp(4),
        marginTop: hp(0.5),
        flexDirection: 'row',
        alignSelf: 'center',
        // justifyContent: 'space-between',
        alignItems: 'center',

        
      }}>
      <View style={{marginLeft: wp(1)}}>
        <Text>{item.id}</Text>
      </View>
      <View>
        <Image
          // source={{uri:item.imageURL}}
          source={
            item.imageURL === ''
              ? {
                  uri: 'https://th.bing.com/th/id/OIP.aWYpRbe6Tbsr_1W42rUwVAAAAA?rs=1&pid=ImgDetMain',
                }
              : {uri: item.imageURL}
          }
          style={{
            width: wp(6),
            height: hp(3),
            borderRadius: wp(5),
            marginLeft: wp(2),
          }}
        />
      </View>
      <View style={{marginLeft: wp(2)}}>
        <Text style={{color: 'black'}}>
          {item.firstName} {item.lastName}
        </Text>
      </View>
      <View style={{position: 'absolute', right: wp(1.5)}}>
        <Text>{item.rewardPoints}</Text>
      </View>
    </View>
  );

  return (
    <View style={{height: hp(20),}}>
      <Text style={styles.barText}>Leader Board</Text>

      <FlatList
        data={topUserList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.userNo.toString()}
        // style={styles.Container}
        // style={{height: hp(10) }}
      />
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  // mainContainer: {
  //   width: wp(90),
  //   borderWidth: wp(0.3),
  //   height: hp(40),
  //   flexDirection: 'row',
  //   borderTopWidth: wp(0.6),
  // },
  bar: {
    height: hp(4),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  barText: {
    fontSize: hp(1.5),
    marginRight: wp(1.4),
    color: '#652D90',
    fontWeight: 'bold',
    marginLeft: wp(1.5),
    marginVertical: 5,
    paddingLeft: wp(2),
    paddingVertical:hp(.2)
  },
});
